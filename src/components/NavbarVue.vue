<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">UmutCar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/" > <b-icon-house-door></b-icon-house-door> Home</b-nav-item>
          <b-nav-item href="/cars"><b-icon-x-diamond></b-icon-x-diamond> Rent</b-nav-item>
          <b-nav-item href="/about"><b-icon-info-circle></b-icon-info-circle> About Us</b-nav-item>
          <b-nav-item href="#"><b-icon-chat-left-dots></b-icon-chat-left-dots>  Contact</b-nav-item>

        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Languages" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">TR</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>

            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>