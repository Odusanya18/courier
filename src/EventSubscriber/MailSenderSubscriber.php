<?php


namespace App\EventSubscriber;

use App\Entity\ProductOrder;
use Doctrine\Common\EventSubscriber;
use Doctrine\Common\Persistence\Event\LifecycleEventArgs;
use Doctrine\ORM\Events;

class MailSenderSubscriber implements EventSubscriber
{
    private $mailer;

    public function __construct(\Swift_Mailer $mailer)
    {
        $this->mailer = $mailer;
    }

    public function getSubscribedEvents()
    {
        return [
            Events::postPersist,
            Events::postUpdate,
        ];
    }

    public function postUpdate(LifecycleEventArgs $args)
    {
        $this->index($args);
    }

    public function postPersist(LifecycleEventArgs $args)
    {
        $this->index($args);
    }

    public function index(LifecycleEventArgs $args)
    {
        $entity = $args->getObject();

        // perhaps you only want to act on some "Product" entity
        if ($entity instanceof ProductOrder) {
            $entityManager = $args->getObjectManager();
            $message = (new \Swift_Message(sprintf('New order received %s', $entity->getFullname())))
                ->setFrom('chinadojoprocurement@gmail.com')
                ->setTo($entity->getEmail())
                ->setBody("Hello,\n\nWe just got your newly placed order, we will contact you as soon as possible.\nThanks for your patience.")
            ;
            $this->mailer->send($message);
        }
    }

    private function sendAdmin(ProductOrder $productOrder)
    {
        $message = (new \Swift_Message(sprintf('New order received from %s', $productOrder->getFullname())))
                ->setFrom('app@chinadojo.com')
                ->setTo('chinadojoprocurement@gmail.com')
                ->setBody(sprintf("Hello,\n\nYou just got a new order from %s, please check your dashboard. ", $productOrder->getFullname()));
        $this->mailer->send($message);


    }
}