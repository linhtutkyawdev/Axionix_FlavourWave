{{-- This file is used for menu items by any Backpack v6 theme --}}
<div class="container mx-auto px-4 py-2 d-flex gap-4 align-items-center"
    style="list-style:none; border-bottom:1px solid #777;">
    <span class="text-white pb-1 mr-4" style="font-size:1.5rem; font-weight:700;">
        Flavourwave
    </span>
    <li class="nav-item"><a class="nav-link text-secondary" href="{{ backpack_url('dashboard') }}"><i
                class="la la-home nav-icon"></i>
            {{
            backpack_user()->department }}</a></li>


    @switch(backpack_user()->department)
    @case('ADMIN')
    <x-backpack::menu-item title="Users" icon="la la-question" :link="backpack_url('user')" class=" text-secondary" />
    <x-backpack::menu-item title="Logout" icon="la la-logout" :link="backpack_url('logout')" class=" text-secondary" />
</div>
<x-admin />
@break

@case('FACTORY')
<x-backpack::menu-item title="Users" icon="la la-question" :link="backpack_url('user')" class=" text-secondary" />
<x-backpack::menu-item title="Products" icon="la la-question" :link="backpack_url('product')" class=" text-secondary" />
<x-backpack::menu-item title="Logout" icon="la la-logout" :link="backpack_url('logout')" class=" text-secondary" />
</div>
<x-factory />
@break

@case('LOGISTIC')
<x-backpack::menu-item title="Users" icon="la la-question" :link="backpack_url('user')" class=" text-secondary" />
<x-backpack::menu-item title="Drivers" icon="la la-question" :link="backpack_url('driver')" class=" text-secondary" />
<x-backpack::menu-item title="Logout" icon="la la-logout" :link="backpack_url('logout')" class=" text-secondary" />
</div>
<x-logistic />
@break

@case('SALE')
<x-backpack::menu-item title="Users" icon="la la-question" :link="backpack_url('user')" class=" text-secondary" />
<x-backpack::menu-item title="Preorders" icon="la la-question" :link="backpack_url('preorder')"
    class=" text-secondary" />
<x-backpack::menu-item title="Preorders Details" icon="la la-question" :link="backpack_url('preorder-detail')"
    class=" text-secondary" />
<x-backpack::menu-item title="Products" icon="la la-question" :link="backpack_url('product')" class=" text-secondary" />
<x-backpack::menu-item title="Drivers" icon="la la-question" :link="backpack_url('driver')" class=" text-secondary" />
<x-backpack::menu-item title="Logout" icon="la la-logout" :link="backpack_url('logout')" class=" text-secondary" />
</div>
<x-sale />
@break

@case('WAREHOUSE')
<x-backpack::menu-item title="Users" icon="la la-question" :link="backpack_url('user')" class=" text-secondary" />
<x-backpack::menu-item title="Drivers" icon="la la-question" :link="backpack_url('driver')" class=" text-secondary" />
<x-backpack::menu-item title="Logout" icon="la la-logout" :link="backpack_url('logout')" class=" text-secondary" />
</div>
<x-warehouse />
@break

@endswitch