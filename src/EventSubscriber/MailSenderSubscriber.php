<?php


namespace App\EventSubscriber;

use App\Entity\ProductOrder;
use Doctrine\Common\EventSubscriber;
use Doctrine\Common\Persistence\Event\LifecycleEventArgs;
use Doctrine\ORM\Events;

class MailSenderSubscriber implements EventSubscriber
{
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

    public function index(LifecycleEventArgs $args, \Swift_Mailer $mailer)
    {
        $entity = $args->getObject();

        // perhaps you only want to act on some "Product" entity
        if ($entity instanceof ProductOrder) {
            $entityManager = $args->getObjectManager();
            $message = (new \Swift_Message(sprintf('New order received %s', $entity->getFullname())))
                ->setFrom('send@example.com')
                ->setTo('recipient@example.com')
                ->setBody("Hello,\n\nWe just got your newly placed order, we will contact you as soon as possible.\nThanks for your patien")
            ;
            $mailer->send($message);
        }
    }
}