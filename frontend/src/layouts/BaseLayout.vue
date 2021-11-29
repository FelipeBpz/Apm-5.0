<template>
<div id="base">
    <b-navbar toggleable type="dark" variant="danger">
        <b-container>
            <b-navbar-brand href="#">NavBar</b-navbar-brand>

            <b-navbar-toggle target="navbar-toggle-collapse">
            <template #default="{ expanded }">
                <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                <b-icon v-else icon="chevron-bar-down"></b-icon>
            </template>
            </b-navbar-toggle>

            <b-collapse id="navbar-toggle-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item href="#">Link 1</b-nav-item>
                <b-nav-item href="#">Link 2</b-nav-item>
                <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
    <b-container class="mt-5">
        <b-row>
            <b-col cols="9">
                <slot name="productos"></slot>
            </b-col>
            <b-col cols="3">
                <h1>hola</h1>
            </b-col>
        </b-row>
    </b-container>
</div>
</template>