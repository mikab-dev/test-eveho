<template>
  <div class="relative bg-white faq">
    <section id="faq" class="text-black my-12 md:my-24 container">
      <div
        v-for="question in questions"
        :key="question.id"
        @click="question.isOpen = !question.isOpen"
      >
        <div
          :class="[
            question.isOpen
              ? 'mb-5 py-4 md:py-8 px-5 md:px-10 transition-colors duration-300 bg-gray-e9'
              : 'mb-5 py-4 md:py-8 px-5 md:px-10 transition-colors duration-300 bg-gray-f6'
          ]"
        >
          <p
            :class="[
              question.isOpen
                ? 'md:text-xl font-semibold flex justify-between cursor-pointer transition-all duration-300 mb-6'
                : 'md:text-xl font-semibold flex justify-between cursor-pointer transition-all duration-300'
            ]"
          >
            <span class="my-auto">
              {{ question.question }}
            </span>
            <span class="my-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 12 6"
                class="transform transition duration-300 w-6 text-gray-a6 stroke-current"
                :class="[
                  question.isOpen
                    ? 'transform transition duration-300 w-6 text-gray-a6 stroke-current -rotate-180'
                    : 'transform transition duration-300 w-6 text-gray-a6 stroke-current'
                ]"
              >
                <path
                  fill="none"
                  stroke-linecap="round"
                  d="M1 .5l5 5 5-5"
                  stroke="currentColor"
                ></path></svg
            ></span>
          </p>
          <div
            :class="[
              question.isOpen
                ? 'md:border-l-8 md:pl-6 text-sm border-gray-e0 transition-all duration-300 overflow-hidden h-xl'
                : 'md:border-l-8 md:pl-6 text-sm border-gray-e0 transition-all duration-300 overflow-hidden  h-0'
            ]"
          >
            <p class="font-medium mb-1">
              {{ question.defaultAnwser }}
            </p>
            <div>
              <p>
                {{ question.anwser }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="relative bg-white custom_contact_us">
      <!---->
      <section id="custom-contact-us" class="text-black">
        <h3 class="text-xl md:text-4xl font-semibold mb-8">
          Vous n’avez pas trouvé de réponse à votre question ? Contactez-nous !
        </h3>
        <div class="flex flex-col md:flex-row md:flex-wrap">
          <div class="flex mb-4 md:mr-24 last:mr-0">
            <div class="mr-6 my-auto">
              <a href="tel:02 37 64 84 40" class="md:hidden block"
                ><img
                  src="https://admin.shoppingauto.fr/storage/uploads/2020/12/15/5fd88680e42195d7fae39ec200PICTO_Hotline.svg"
                  class="w-16"
              /></a>
              <button class="hidden md:block">
                <img
                  src="https://admin.shoppingauto.fr/storage/uploads/2020/12/15/5fd88680e42195d7fae39ec200PICTO_Hotline.svg"
                  class="w-16"
                />
              </button>
            </div>
            <div class="my-auto flex-1">
              <p class="text-base md:text-xl font-semibold">
                Hotline téléphonique
              </p>
              <div class="text-sm">
                <p>
                  Du lundi au samedi de 9h00 &agrave; 19h00 au
                  <a href="tel:0237648440">02 37 64 84 40</a>.
                </p>
              </div>
            </div>
          </div>
          <div class="flex mb-4 md:mr-24 last:mr-0">
            <img
              src="https://admin.shoppingauto.fr/storage/uploads/2020/12/15/5fd886839aec65d7fae3a008b3PICTO_Chat.svg"
              class="w-16 my-auto mr-6"
            />
            <div class="my-auto flex-1">
              <p class="text-base md:text-xl font-semibold">
                Chat en ligne
              </p>
              <div class="text-sm">7 jours sur 7, de 6h à minuit</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Faq",
  data() {
    return {
      questions: [
        {
          id: 1,
          question: "shoppingauto.fr, comment ça marche ?",
          defaultAnwser: "La réponse de shoppingauto.fr :",
          isOpen: true,
          anwser:
            "Acheter une auto n'aura jamais été aussi facile. Cherchez, comparez et réservez ! Dès réception de votre réservation, on se charge de finaliser votre commande à vos côtés et à 100% en digital ! 😊 "
        },
        {
          id: 2,
          question:
            "J'aimerai avoir des infos complémentaires sur un véhicule ?",
          defaultAnwser: "La réponse de shoppingauto.fr :",
          isOpen: false,
          anwser:
            "Une question sur la finition ?  Les options ? Une trace d'usure ? Nos conseillers shoppingauto.fr vous répondent directement sur notre chat ! 😎"
        },
        {
          id: 3,
          question: "Comment savoir combien coutera ma livraison ?",
          defaultAnwser: "La réponse de shoppingauto.fr :",
          isOpen: false,
          anwser: `Rien de plus simple : Une fois votre véhicule choisie, appuyez sur le bouton "je shop" et une étape plus tard on vous demandera dans quel département vous souhaitait être livré et on vous indiquera le tarif ! 🚀`
        },
        {
          id: 4,
          question: "Comment réserver le véhicule ?",
          defaultAnwser: "La réponse de shoppingauto.fr :",
          isOpen: false,
          anwser:
            "Afin de bloquer la voiture de vos rêves, nous vous invitons à réserver le véhicule en ligne en versant un acompte de 250€, un bon de réservation vous sera transmis automatiquement par mail. "
        },
        {
          id: 5,
          question: "Comment payer le solde du véhicule ?",
          defaultAnwser: "La réponse de shoppingauto.fr :",
          isOpen: false,
          anwser:
            "Le montant de l'acompte sera enlevé du montant global et notre service administratif se chargera de vous envoyer la facture, le bon de commande et notre RIB. Pour le paiement du solde, un virement sera exigé en amont de la livraison et dès reception des fonds, la livraison pourra être effectuée."
        },
        {
          id: 6,
          question: "Que faire si le véhicule ne me convient pas ?",
          defaultAnwser: "La réponse de shoppingauto.fr :",
          isOpen: false,
          anwser:
            "Pas de panique ! Vous êtes protégé avec notre garantie satisfait ou remboursé."
        }
      ]
    };
  }
};
</script>
