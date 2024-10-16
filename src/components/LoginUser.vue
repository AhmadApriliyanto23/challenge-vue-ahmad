<template>
    <div class="container min-vh-100 d-flex align-items-center justify-content-center">
        <div class="row flex-fill">
            <div class="col col-md-8 d-flex justify-content-center">
                <div class="logo">
                </div>
            </div>
            <div class="col col-md-4 d-flex flex-column">
                <div class="mb-4">
                    <div class="logo-company text-center">
                        <img alt="Vue logo" src="../assets/logo.png">
                    </div>
                </div>
                <form class="flex-fill container">
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input v-model="email" type="email" class="form-control" id="email" placeholder="email">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        
                        <div class="input-group mb-3">
                            <input v-model="password" type="password" class="form-control" id="password"
                            placeholder="password">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="visibilityPassword('password')"><i class="material-icons">visibility</i></button>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="password-confirm" class="form-label">Konfirmasi Password</label>
                        <div class="input-group mb-3">
                            <input v-model="passwordConfirm" type="password" class="form-control" id="password-confirm"
                            placeholder="confirmation password">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="visibilityPassword('password-confirm')"><i class="material-icons">visibility</i></button>
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="d-grid gap-2">
                            <button type="button" class="btn btn-block btn-success"
                                @click="handleSubmit()">LOGIN</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref} from 'vue';
import '../assets/global.css';
import { useSnackbar } from "vue3-snackbar";
import api from '@/api';

const snackbar = useSnackbar();

function addSnackbar(types:any,texts:string) {
  snackbar.add({
    type: types,
    text: texts,
  })
}

const password = ref<string>('');
const email = ref<string>('');
const passwordConfirm = ref<string>('');

async function handleSubmit() {
    let emailInput = email.value;
    let passwordInput = password.value;
    let passwordConfirmInput = passwordConfirm.value;
    if (emailInput == "" || passwordInput == "" || passwordConfirmInput == "") {
        addSnackbar('warning', 'Email | password | konfirmasi password salah');
        return;
    }
    
    if (passwordInput!= passwordConfirmInput) {
        addSnackbar('warning', 'password & konfirmasi password tidak sesuai');
        return;
    }

    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(emailInput)){
        addSnackbar('warning', 'Email | password | konfirmasi password salah');
        return;
    }

    let dataReq = {
        email:emailInput,
        password:passwordInput
    }
    try {
        const req = await api.login(dataReq);
        addSnackbar('success', 'Login success');
    } catch (error:any) {
        addSnackbar('error', error);
    }
}

function visibilityPassword(elId:string){
    let isType = document.getElementById(elId)?.getAttribute('type');
    if(isType=='password'){
        document.getElementById(elId)?.setAttribute('type','text');
    }else{
        document.getElementById(elId)?.setAttribute('type','password');
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
</style>