<?php

namespace App\Controller;

use App\Entity\Page;
use App\Entity\Post;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class Controller extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index()
    {
        $allPosts = $this->getDoctrine()->getRepository(Post::class)->findAll();
        $posts = array_slice($allPosts, 0, 3);

        return $this->render('/home/index.html.twig', [
            'posts' => $posts
        ]);
    }

    /**
     * @Route("/page/{id}", name="page")
     */
    public function page(Page $page)
    {
        return $this->render('/home/generic.html.twig', [
            'resource' => $page,
        ]);
    }

    // /**
    //  * @Route("/post/{id}", name="post")
    //  */
    // public function post(Post $post)
    // {
    //     return $this->render('/home/generic.html.twig', [
    //         'resource' => $post,
    //     ]);
    // }
}
