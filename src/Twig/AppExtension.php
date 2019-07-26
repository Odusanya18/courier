<?php
// src/Twig/AppExtension.php
namespace App\Twig;

use App\Entity\Page;
use Doctrine\ORM\EntityManagerInterface;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class AppExtension extends AbstractExtension
{
    private $em;
    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    public function getFunctions()
    {
        return [
            new TwigFunction('pages', [$this, 'getPages']),
        ];
    }

    public function getPages(){
        $page = $this->em->getRepository(Page::class)->findAll();
        return array_splice($page,0 ,5);
    }

}