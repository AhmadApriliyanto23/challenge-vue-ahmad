<template>
    <div class="container min-vh-100 d-flex align-items-center justify-content-center">
        <div class="row flex-fill">
            <div class="col col-md-8 d-flex justify-content-center">
                <div class="logo">
                </div>
            </div>
            <div class="pt-5 pb-5 mt-5 mb-5 col col-md-4 d-flex flex-column">
                <div class="mb-4">
                    <div class="logo-company text-center">
                        <img alt="Vue logo" src="../assets/logo.png">
                    </div>
                </div>
                <form class="pt-5 pb-5 d-flex justify-content-center">
                    <input v-for="(id, index) in 6" :key="id" :index="index" :maxlength="1" :id="`num${index}`"
                         v-on:keyup="focusNext(index)" class="form-control me-1 num"
                        type="text" />
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';

function focusNext(index: number) {
    if (index < 5) {
        document.getElementById(`num${(index + 1)}`)?.focus(); return;
    }
    if (index == 5) {
        router.push('/home')
    }
}
</script>

<style scoped>
.logo {
    background-image: url('https://wallpapercave.com/wp/wp6878944.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: auto;
}

.logo-company img {
    width: 50%;
    height: auto;
}

.num {
    border: #399a7a solid 1px;
    text-align: center;
}
</style>
