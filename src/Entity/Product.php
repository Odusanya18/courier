<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiProperty;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiSubresource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ApiResource(
 *     collectionOperations={
 *     "get",
 *         "post"
 *     })
 * @ORM\Entity(repositoryClass="App\Repository\ProductRepository")
 */
class Product
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @ApiProperty(identifier=true)
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank()
     * @ApiProperty(iri="http://schema.org/name")
     * @Groups({"read", "write"})
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank()
     * @Assert\Url()
     * @Groups({"read", "write"})
     */
    private $link;
    
    
    /**
     * @var MediaObject|null
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\MediaObject")
     * @ORM\JoinColumn(nullable=true)
     * @Assert\NotBlank()
     * @ApiProperty(iri="http://schema.org/image")
     */
    public $image;

    /**
     * @ORM\ManyToOne(targetEntity="ProductOrder", inversedBy="products")
     */
    private $product_order;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getLink(): ?string
    {
        return $this->link;
    }

    public function setLink(string $link): self
    {
        $this->link = $link;

        return $this;
    }

    public function getProductOrder(): ?ProductOrder
    {
        return $this->product_order;
    }

    public function setProductOrder(?ProductOrder $product_order): self
    {
        $this->product_order = $product_order;

        return $this;
    }

    /**
     * @return MediaObject|null
     */
    public function getImage(): ?MediaObject
    {
        return $this->image;
    }

    /**
     * @param MediaObject|null $image
     */
    public function setImage(?MediaObject $image): void
    {
        $this->image = $image;
    }


}
