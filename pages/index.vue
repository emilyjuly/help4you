<script lang="ts" setup>
import '~/assets/css/first.css'

const infoItems = [
    {
        icon: 'heroicons:calendar-date-range',
        title: 'Duração',
        subtitle: '2 meses',
    },
    {
        icon: 'heroicons:user-group-16-solid',
        title: 'Próxima turma',
        subtitle: '09 de setembro de 2024',
    },
    {
        icon: 'heroicons:rocket-launch-16-solid',
        title: 'Carreiras impulsionadas',
        subtitle: '+30 profissionais',
    }
]

const aboutItems = [
    'Desenvolvedores que desejam conquistar sua primeira oportunidade no mercado de trabalho.',
    'Desenvolvedores já empregados que estão em busca de uma melhor oportunidade na carreira.',
    'Universitários que estão à procura de estágios na área de desenvolvimento de software.'
]

const resultsItems = [
    `Visitas e interações em seu perfil do LinkedIn`,
    `Respostas de processos seletivos e mensagens de recrutadores`,
    `Aumento de networking, compartilhando experiências`
]
</script>

<template>
    <section id="home" class="p-6 bg-no-repeat bg-cover" style="background-image: url('/background.png');">
        <header class="pb-4" style="    border-bottom: 1px solid #263238;
">
            <img src="/logo.svg" alt="Um número 4, logo do projeto help 4 you" />
        </header>
        <main class="flex flex-column justify-center text-center align-items-center gap-6 p-8" style="color: #263238;">
            <img src="/logo-2.png" alt="Um número 4, escrito Help you, sendo o 4 o for, e uma moça com um notebook sentada no número 4" />
            <h1 class="font-light text-5xl" style="font-family: 'Righteous', sans-serif; letter-spacing: 1px;">Impulsionando Carreiras. <br>
                Agregando à Comunidade Tech!
            </h1>
            <p class="font-semibold text-lg" style="font-family: 'IBM Plex Mono', monospace;">Acompanhamento gratuito, para desenvolvedores de <br> software em qualquer etapa da carreira.</p>
            <button class="main-button">Quero participar</button>
        </main>
    </section>
    <div class="info-container">
        <template v-for="(item, index) in infoItems" :key="index">
            <div class="flex align-items-center gap-2">
                <Icon :name="item.icon" style="color: #263238" size="40" />
                <span class="flex flex-column" style="font-family: 'IBM Plex Sans'
                , sans-serif;">
                    <span class="font-semibold">{{ item.title }}</span>
                    <span style="color: #727A7D">{{ item.subtitle }}</span>
                </span>
            </div>
        </template>
    </div>
    <section id="paraQuem" class="flex flex-column gap-6 p-6 bg-no-repeat bg-cover" style="background-image: url('/background.png');">
        <div class="flex flex-column">
            <h1 class="font-light text-3xl mb-4" style="font-family: 'Righteous', sans-serif; letter-spacing: 1px; color: #263238;">Para quem o acompanhamento é?</h1>
            <template v-for="(item, index) in aboutItems" :key="index">
                <p class="para-quem">
                    <Icon class="icons" name="heroicons:chevron-right-20-solid" size="30" />
                    {{ item }}
                </p>
            </template>
        </div>
    </section>
    <section id="resultados">
        <div class="flex flex-column w-full p-7" style="background-color: aliceblue;">
            <h1 class="font-light text-3xl mb-4" style="font-family: 'Righteous', sans-serif; letter-spacing: 1px; color: #263238;">Resultados esperados</h1>
            <div class="resultados-container">
                <template v-for="(item, index) in resultsItems" :key="index">
                    <span class="card" style="box-shadow: 0 5px 15px 0 #00000026;">
                        <Icon name="mdi:plus" size="30" />
                        <p class="text-lg" style="color: #263238; font-family: 'IBM Plex Sans'
                , sans-serif;">{{ item }}</p>
                    </span>
                </template>
            </div>
        </div>
    </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Righteous&display=swap');

@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Righteous&display=swap');

@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Righteous&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Righteous&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

.main-button {
    background-color: #263238;
    font-family: "Roboto", sans-serif;
    transition: .2s;
    font-size: 16px;
    font-weight: 600;
    color: white;
    border: none;
    padding: 15px 70px;
    cursor: pointer;
}

.main-button:hover {
    background-color: #38464D;
    transition: .2s
}

.info-container {
    display: flex;
    width: 100%;
    padding: 70px;
    justify-content: space-between;
    align-items: center;
    background-color: aliceblue;
}

.para-quem {
    display: flex;
    align-items: center;
    font-size: 20px;
    margin-bottom: 10px;
    color: #263238;
    font-family: 'IBM Plex Sans'
        , sans-serif;
}

.resultados-container {
    display: flex;
    justify-content: space-between;
}

.card {
    display: flex;
    width: 25%;
    border-radius: 10px;
    gap: 20px;
    padding: 25px;
    justify-content: center;
    align-items: center;
}

@media (max-width: 480px) {
    .main-button {
        font-size: 14px;
        width: 300px;
    }

    .info-container {
        flex-direction: column;
        gap: 60px;
        align-items: flex-start;
    }

    .para-quem {
        font-size: 13px;
        gap: 10px;
    }

    .resultados-container {
        flex-direction: column;
        width: 100%;
    }

    .card {
        width: 100%;
        margin-bottom: 40px;
    }
}
</style>