<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return parent::toArray($request);

        /* 'created' => Carbon::make($this->created_at)->format('d-m-Y'); */
    }
}