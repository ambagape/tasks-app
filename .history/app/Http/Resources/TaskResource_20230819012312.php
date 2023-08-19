<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TaskResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'phone' => $this->phone,
            'email' => $this->email,
            'is_favourite' => $this->whenLoaded('favourites', fn () => $this->isFavouredByAuthenticatedUser()),
            'categories' => ContactCategoryResource::collection($this->whenLoaded('categories')),
        ];
    }
}
