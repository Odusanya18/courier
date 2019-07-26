<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiProperty;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiSubresource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;
use EWZ\Bundle\RecaptchaBundle\Validator\Constraints as Recaptcha;

/**
 * @ApiResource(
 *     normalizationContext={"groups"={"read"}},
 *     denormalizationContext={"groups"={"write"}}
 * )
 * @ORM\Entity(repositoryClass="App\Repository\ProductOrderRepository")
 */
class ProductOrder
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
     * @Groups({"read", "write"})
     */
    private $fullname;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $phone_number;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Email()
     * @Assert\NotBlank()
     * @Groups({"read", "write"})
     */
    private $email;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups({"read", "write"})
     */
    private $additional_note;

    /**
     * @ORM\Column(type="boolean")
     * @Groups({"read", "write"})
     */
    private $is_shipped;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Product", mappedBy="product_order", cascade={"persist", "remove"})
     * @Groups({"read", "write"})
     * @ApiSubresource
     */
    private $products;

    public function __construct()
    {
        $this->products = new ArrayCollection();
        $this->is_shipped = false;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFullname(): ?string
    {
        return $this->fullname;
    }

    public function setFullname(string $fullname): self
    {
        $this->fullname = $fullname;

        return $this;
    }

    /**
     * @Groups({"read"})
     * @Assert\NotBlank()
     * @Assert\Regex("^[0]\d{10}$^", message="Enter phone number without country code.")
     */
    public function getPhoneNumber(): ?string
    {
        return $this->phone_number;
    }

    /**
     * @Groups({"write"})
     */
    public function setPhoneNumber(string $phone_number): self
    {
        $this->phone_number = $phone_number;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * @Groups({"read"})
     */
    public function getAdditionalNote(): ?string
    {
        return $this->additional_note;
    }

    /**
     * @Groups({"write"})
     */
    public function setAdditionalNote(?string $additional_note): self
    {
        $this->additional_note = $additional_note;

        return $this;
    }

    /**
     * @return Collection|Product[]
     */
    public function getProducts(): Collection
    {
        return $this->products;
    }

    public function addProduct(Product $product): self
    {
        if (!$this->products->contains($product)) {
            $this->products[] = $product;
            $product->setProductOrder($this);
        }

        return $this;
    }

    public function removeProduct(Product $product): self
    {
        if ($this->products->contains($product)) {
            $this->products->removeElement($product);
            // set the owning side to null (unless already changed)
            if ($product->getProductOrder() === $this) {
                $product->setProductOrder(null);
            }
        }

        return $this;
    }

    public function getIsShipped(): ?bool
    {
        return $this->is_shipped;
    }

    public function setIsShipped(bool $is_shipped): self
    {
        $this->is_shipped = $is_shipped;

        return $this;
    }
}
