<?php
// api/src/Entity/MediaObject.php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiProperty;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Controller\CreateMediaObjectAction;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ApiResource(
 *     iri="http://schema.org/MediaObject",
 *     normalizationContext={
 *         "groups"={"media_object_read"},
 *     },
 *     collectionOperations={
 *         "post"={
 *             "controller"=CreateMediaObjectAction::class,
 *             "defaults"={"_api_receive"=false},
 *         "denormalization_context"={"groups"={"media_object_post"}},
 *         "validation_groups"={"media_object_post"},
 *         "swagger_context" = {
 *            "consumes" = {
 *                "multipart/form-data",
 *             },
 *                 "parameters"={
 *                     {
 *                         "in"="formData",
 *                         "name"="file",
 *                         "type"="file",
 *                         "description"="The file to upload",
 *                     },
 *                 },
 *             },
 *         },
 *         "get",
 *     },
 *     itemOperations={
 *         "get", "delete"
 *     },
 * )
 *
 * @ORM\Entity(repositoryClass="App\Repository\MediaObjectRepository")
 * @Vich\Uploadable
 */
class MediaObject
{
    /**
     * @var int|null
     *
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue
     * @ORM\Id
     * @Groups({"media_object_read"})
     */
    public $id;

    /**
     * @var string|null
     *
     * @ApiProperty(iri="http://schema.org/imageObject")
     * @Groups({"media_object_read"})
     */
    public $contentUrl;

    /**
     * @var File|null
     *
     * @Assert\NotNull(groups={"media_object_post"})
     * @Vich\UploadableField(mapping="media_object", fileNameProperty="filePath")
     */
    public $file;

    /**
     * @var string|null
     *
     * @ORM\Column(nullable=true)
     */
    public $filePath;

    public function getId(): ?int
    {
        return $this->id;
    }
}
