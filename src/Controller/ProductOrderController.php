<?php

namespace App\Controller;

use App\Entity\MediaObject;
use App\Entity\Product;
use App\Entity\ProductOrder;
use App\Form\ProductOrderType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormError;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/product/order")
 */
class ProductOrderController extends AbstractController
{
    /**
     * @Route("/new", name="product_order_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $productOrder = new ProductOrder();
        $form = $this->createForm(ProductOrderType::class, $productOrder);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            foreach ($_POST['product_order_products'] as $record) {
                if ($record['name'] != '' || $record['link'] != ''){
                    $product = new Product();
                    $product->setName($record['name']);
                    $product->setLink($record['link']);
                    $image = $entityManager->getRepository(MediaObject::class)->find(intval($record['image']));
                    $product->setImage($image);
                    $productOrder->addProduct($product);
                }
            }
            if (empty($productOrder->getProducts())){
                $form->get('products')->addError(new FormError('No products in order'));
                return $this->redirectToRoute('product_order_new');
            }
            $entityManager->persist($productOrder);
            $entityManager->flush();

            return $this->redirectToRoute('payment_new');
        }

        return $this->render('product_order/new.html.twig', [
            'product_order' => $productOrder,
            'form' => $form->createView(),
        ]);
    }
}
