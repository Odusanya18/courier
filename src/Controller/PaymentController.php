<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Payment;
use App\Form\PaymentType;

/**
 * @Route("/payment", name="payment")
 */
class PaymentController extends AbstractController
{
    /**
     * @Route("", name="_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $Payment = new Payment();
        $form = $this->createForm(PaymentType::class, $Payment);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($Payment);
            $entityManager->flush();

            return $this->redirectToRoute('home');
        }

        return $this->render('payment/new.html.twig', [
            'payment' => $Payment,
            'form' => $form->createView(),
        ]);
    }
}
