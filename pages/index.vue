<script lang="ts" setup>
import { ref } from "vue";

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
        subtitle: 'Em breve',
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

const events = ref([
    { status: 'LinkedIn', icon: 'mdi:linkedin', text: 'Aprimore seu perfil, aumente suas visitas e atraia mais mensagens de recrutadores.' },
    { status: 'Direcionamento de Mercado', icon: 'mdi:briefcase', text: 'Aprenda a buscar vagas com mais precisão e identifique os requisitos que faltam para alcançar sua vaga ideal.' },
    { status: 'Preparação para Processos Seletivos', icon: 'heroicons:clipboard-document-list-solid', text: 'Prepare-se para se destacar nas entrevistas, aumentar sua autoconfiança e brilhar nos testes técnicos.' },
]);

const feedbacks = [
    {
        text: `"Help4you me apareceu em um momento em que eu não sabia mais o que fazer para conseguir minha recolocação no mercado. Desde o inicio da experiência com a help4you o pessoal foi muito solicito, compreensivo com possíveis contratempos, lá eu aprendi coisas que eu não sabiam que poderia ajudar a engajar meu perfil no LinkedIn, e reforçou a atividade de coisas que beneficiam o networking e ajudam a gente a ter mais possibilidades."`,
        name: "Tharsis Lumumba (Desenvolvedor Flutter Mobile na Duaik Entretenimento Ltda)",
        image: '/participante-tharsis.jpeg'
    },
    {
        text: `"O projeto me ajudou a organizar melhor meu LinkedIn, agora recebo convites todos os dias, o meu perfil agora faz mais sentido. O Help 4 you me ajudou com a parte de como me portar em uma entrevista, o que esperar, e como me preparar."`,
        name: "Luis Fernando (Estagiário de automações na Vivo)",
    }
]

const plans = [
    {
        title: 'Basic', subtitle: 'Dê o primeiro passo na sua carreira com atividades semanais e orientação em grupo.', duracao: '2 meses', valor: '0.00', atividades: [
            'Propostas de atividades semanais',
            'Participação em grupo no Whatsapp com orientações gerais'
        ]
    },
    {
        title: 'Essential', subtitle: 'Aprimore suas chances no mercado com suporte personalizado, análise de currículo e envio de vagas alinhadas ao seu perfil.', duracao: 'Ilimitada', valor: '19.99/mês', atividades: [
            'Tudo do Pacote Gratuito',
            'Acompanhamento diário e personalizado via WhatsApp',
            'Envio de vagas que se encaixam no seu perfil semanalmente',
            'Análise e ajuda nos ajustes de LinkedIn e Currículo',
            'Envio de material didático de acordo com seu perfil'
        ]
    },
    {
        title: 'Premium', subtitle: 'Prepare-se para o próximo nível com desafios técnicos práticos, simulações de entrevistas e supervisão dedicada para alcançar seus objetivos.', duracao: 'Ilimitada', valor: '29.99/mês', atividades: [
            'Tudo do Pacote Essential',
            'Disponibilização de roadmap de estudos de acordo com seu perfil',
            'Consultas personalizadas para planejamento de carreira',
            'Simulação de entrevistas',
            'Desafios práticos de programação'
        ]
    }
]
</script>

<template>
    <main>
        <section id="home" class="p-6">
            <header class="pb-4" style="border-bottom: 1px solid #263238;">
                <img src="/logo.svg" alt="Um número 4, logo do projeto help 4 you" />
            </header>
            <div class="flex flex-column justify-center text-center align-items-center gap-6 p-8" style="color: #263238;">
                <img src="/logo-2.png" alt="Um número 4, escrito Help you, sendo o 4 o for, e uma moça com um notebook sentada no número 4" />
                <h1 class="font-light text-5xl" style="font-family: 'Righteous', sans-serif; letter-spacing: 1px;">Impulsionando Carreiras. <br>
                    Agregando à Comunidade Tech!
                </h1>
                <p class="font-semibold text-lg" style="font-family: 'IBM Plex Mono', monospace;">Acompanhamento de carreira, para desenvolvedores de <br> software em qualquer etapa da carreira.</p>
            </div>
        </section>
        <section class="info-container">
            <template v-for="(item, index) in infoItems" :key="index">
                <div class="flex align-items-center gap-2">
                    <Icon :name="item.icon" style="color: #263238;" size="40px" />
                    <span class="flex flex-column" style="font-family: 'IBM Plex Sans'
                , sans-serif;">
                        <span style="color: #263238" class="font-semibold">{{ item.title }}</span>
                        <span style="color: #727A7D">{{ item.subtitle }}</span>
                    </span>
                </div>
            </template>
        </section>
        <section id="paraQuem" class="flex flex-column gap-8 p-6 py-8 bg-no-repeat bg-cover" style="background-image: url('/background.png');">
            <div class="flex flex-column">
                <h1 class="font-light text-3xl mb-4" style="font-family: 'Righteous', sans-serif; letter-spacing: 1px; color: #263238;">Para quem o acompanhamento é?</h1>
                <template v-for="(item, index) in aboutItems" :key="index">
                    <p class="para-quem">
                        <Icon class="icons" name="heroicons:chevron-right-20-solid" size="30px" />
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
                            <!-- <Icon name="mdi:plus" size="30px" /> -->
                            <p class="font-bold text-3xl">+</p>
                            <p class="text-lg" style="font-family: 'IBM Plex Sans'
                , sans-serif;">{{ item }}</p>
                        </span>
                    </template>
                </div>
            </div>
        </section>
        <section id="validacao" class="validacao" style="background-image: url('/background.png'); font-family: 'IBM Plex Sans'
                , sans-serif; color: #263238;">
            <template v-for="feedback in feedbacks">
                <div class="feedback-card" style="background-color: aliceblue;">
                    <div class="flex align-items-center">
                        <template v-for="start in 5">
                            <Icon size="20" name="heroicons:star-16-solid" style="color: #FFE264" />
                        </template>
                    </div>
                    <p class="mt-5" style="color: #263238;">
                        {{ feedback.text }}
                    </p>
                    <span class="feedback-dados">
                        <div class="flex mr-2 w-4rem h-4rem border-circle overflow-hidden">
                            <template v-if="feedback.image">
                                <img src="/participante-tharsis.jpeg" alt="Participante do projeto" class="w-full h-full object-cover" />
                            </template>
                            <template v-else>
                                <Icon name="heroicons:user-20-solid" class="object-cover w-full h-full p-2" />
                            </template>
                        </div>
                        <div>
                            <p style="color: #D56A08;">
                                {{ feedback.name }} <br>
                                Participante da 2ª edição do projeto
                            </p>
                        </div>
                    </span>
                </div>
            </template>
        </section>
        <section id="cronograma" style="background-color: aliceblue">
            <div class="flex flex-column w-full p-7">
                <h1 class="font-light text-3xl mb-4" style="font-family: 'Righteous', sans-serif; letter-spacing: 1px; color: #263238;">Cronograma</h1>
                <Timeline :value="events" align="alternate" style="background-color: aliceblue;" class="customized-timeline">
                    <template #marker="slotProps">
                        <Icon :name="slotProps.item.icon" size="30" style="color: #263238" class="mt-2 mb-2" />
                    </template>
                    <template #content="slotProps">
                        <Card class="mt-6 mb-2" style="font-family: 'IBM Plex Sans'
                , sans-serif; background-color: aliceblue; color: #263238; box-shadow: 0 5px 15px 0 #00000026;">
                            <template #title>
                                <b>{{ slotProps.item.status }}</b>
                            </template>
                            <template #content>
                                <p>
                                    {{ slotProps.item.text }}
                                </p>
                            </template>
                        </Card>
                    </template>
                </Timeline>
            </div>
        </section>
        <section id="planos" ref="planos" class="p-6 bg-no-repeat bg-cover" style="background-image: url('/background.png');">
            <div class="flex flex-column w-full">
                <h1 class="font-light text-3xl mb-4" style="font-family: 'Righteous', sans-serif; letter-spacing: 1px; color: #263238;">Nossos planos</h1>
                <div class="card-container">
                    <template v-for="plan in plans">
                        <div class="card-plano" :class="{ 'card-animation': plan.title === 'Essential' }">
                            <span v-if="plan.title === 'Essential'" class="flex justify-content-center w-4 p-1" style="border: 1px solid #263238; border-radius: 20px;">Popular</span>
                            <p class="font-semibold text-5xl">{{ plan.title }}</p>
                            <p class="mt-3">{{ plan.subtitle }}</p>
                            <div class="mt-3">
                                <strong>Duração:</strong>{{ plan.duracao }}
                            </div>
                            <i v-if="plan.obs">{{ plan.obs }}</i>
                            <div class="mt-3">
                                <p>
                                    <span class="font-bold text-xl" style="color: #D56A08">
                                        R$
                                    </span>
                                    <span class="font-bold text-6xl" style="color: #263238;">{{ plan.valor }}</span>
                                </p>
                            </div>
                            <PrincipalButton v-if="plan.title !== 'Basic'" class="w-full mt-5" label="Quero Participar" />
                            <p v-if="plan.title === 'Basic'">Inscrições encerradas, aguarde formação de nova turma</p>
                            <template v-for="(atividade, index) in plan.atividades">
                                <div class="flex align-items-center mt-3">
                                    <Icon class="mr-3" name="heroicons:check-circle-solid" style=" width: 25px; height: 25px; flex-shrink: 0;" />
                                    <p>{{ atividade }}</p>
                                </div>
                                <div v-if="index !== (plan.atividades.length - 1)" style="height: 0.5px; background-color: #263238" />
                            </template>
                        </div>
                    </template>
                </div>
            </div>
        </section>
        <footer class="flex flex-column justify-content-between" id="footer" style="font-family: 'IBM Plex Sans'
                , sans-serif; color: #263238;">
            <div class="flex flex-column justify-content-between items-center py-5 px-7" style="background-color: aliceblue;">
                <p class="flex flex-column text-sm">
                    &copy; 2024 - Projeto Help 4 You 3ª Edição. Todos os direitos reservados. <br>                    
                    <a class="flex items-center mt-2" style="color:#263238; text-decoration: none;" href="https://www.linkedin.com/in/emily-july/" target="_blank">
                        <b class="mr-2">Responsável:</b> <Icon name="mdi:linkedin" size="20" />Emily July
                    </a>
                </p>
                <div class="flex flex-column" style="color: #263238;">
                    <a style="color: #263238;" href="mailto:help4youcc@gmail.com" target="_blank" class=" flex items-center text-sm mr-3">
                        <Icon name="mdi:gmail" size="20" />
                        Fale conosco
                    </a>
                    <a style="color: #263238;" class="flex mt-2 items-center text-sm" href="https://www.linkedin.com/company/help-4-you-acompanhamento/" target="_blank">
                        <Icon name="mdi:linkedin" size="20" />
                        Acesse nossa página no LinkedIn
                    </a>
                </div>
            </div>    
        </footer>
    </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Righteous&display=swap');

@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Righteous&display=swap');

@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Righteous&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Righteous&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');


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
    margin-top: 35px;
    color: #263238;
    font-family: 'IBM Plex Sans', sans-serif;
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
    color: #263238;
}

.validacao {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 4rem;
    background-repeat: no-repeat;
    background-size: cover;
}

.feedback-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 45%;
    padding: 2rem;
    border-radius: 10px;
}

.feedback-dados {
    display: flex;
    align-items: center;
    margin-top: 20px;
}

.card-plano {
    font-family: 'IBM Plex Sans', sans-serif;
    padding: 2rem;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
    color: #263238;
    width: 25%;
}

.card-container {
    display: flex;
    justify-content: space-between;
}

@keyframes highlight {

    0%,
    100% {
        box-shadow: 0 0 10px white;
    }

    50% {
        box-shadow: 0 0 20px #263238;
    }
}

.card-animation {
    animation: highlight 2s infinite ease-in-out;
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

    .validacao {
        flex-direction: column;
    }

    .feedback-card {
        width: 100%;
        margin-bottom: 3rem;
    }

    .feedback-dados {
        flex-direction: column;
        align-items: start;
        font-size: 13px;
    }

    .card-container {
        flex-direction: column;
    }

    .card-plano {
        width: 100%;
        margin-bottom: 3rem;
    }
}

@media screen and (max-width: 960px) {
    ::v-deep(.customized-timeline) {
        .p-timeline-event:nth-child(even) {
            flex-direction: row;

            .p-timeline-event-content {
                text-align: left;
            }
        }

        .p-timeline-event-opposite {
            flex: 0;
        }
    }
}
</style>