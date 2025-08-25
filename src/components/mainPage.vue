<template>
  <v-container class="px-6 reveal main-container">
    <div class="text-center top-container reveal">
      <div class="d-inline-block">
        <v-img
          src="/src/assets/mainPage.png"
          width="290"
          height="290"
          class="rounded-xl"
        ></v-img>
      </div>
      <div class="text-center mt-6 mb-16">
        <div class="fs-35 font-weight-bold">مجید خسروی</div>
        <div class="fs-25 my-4">۱۴۰۴ - ۱۳۲۶</div>
        <!-- <div class="fs-20 font-weight-bold">به یاد مهربانی‌های همیشگی</div> -->
        <div >
            <span>+ به یاد دارید؟</span>
            <span class="mr-5 font-weight-bold fs-20">- تا زنده باشیم!</span>
        </div>
      </div>
    </div>
    <div class="text-center">
      <div class="reveal">
        <div class="d-inline-block">
          <v-img
            src="/src/assets/yalda.jpg"
            width="332"
            height="332"
            class="rounded-xl"
            gradient="to top, rgba(20,22,29,.6), rgba(0,0,0,.0)"
          ></v-img>
        </div>
      </div>
      <div class="reveal my-4">
        <div class="d-inline-block">
          <v-img
            src="/src/assets/redChair.jpg"
            width="332"
            height="332"
            class="rounded-xl"
            gradient="to top, rgba(20,22,29,.6), rgba(0,0,0,.0)"
          ></v-img>
        </div>
      </div>

      <v-card class="reveal rounded-xl pt-4" color="#E0E0E0" elevation="10">
        <p class="poem">
          درین سرای بی کسی، کسی به در نمی‌زند<br />
          به دشتِ پُرملال ما پرنده پَر نمی‌زند<br />
          <br />
          یکی ز شب گرفتگان چراغ بر نمی‌کُند<br />
          کسی به کوچه سارِ شب درِ سحر نمی‌زند<br />
          <br />
          نشسته‌ام در انتظارِ این غبارِ بی سوار<br />
          دریغ کز شبی چنین سپیده سر نمی‌زند<br />
          <br />
          گذرگهی است پُر ستم که اندر او به غیر غم<br />
          یک صلای آشنا به رهگذر نمی‌زند<br />
          <br />
          دل خراب من دگر خراب‌تر نمی‌شود<br />
          که خنجر غمت از این خراب‌تر نمی‌زند<br />
          <br />
        </p>
      </v-card>
      <div class="reveal my-14">
          <div class="d-inline-block">
              <v-img
              src="/src/assets/ghabr.jpg"
              width="332"
              height="332"
              class="rounded-xl"
              gradient="to top, rgba(20,22,29,.6), rgba(0,0,0,.0)"

              ></v-img>
            </div>
          <div class="d-inline-block mt-4 mb-8x">
              <v-img
              src="/src/assets/aroosi.jpeg"
              width="332"
              height="332"
              class="rounded-xl"
              gradient="to top, rgba(20,22,29,.6), rgba(0,0,0,.0)"

              ></v-img>
            </div>

            <div class="mb-6 mt-16 font-weight-bold">
                <div class="mr-n6">زنده را تا زنده است باید به فریادش رسید</div>
                <div class="mr-16 mt-3">ورنه بر سنگ مزارش آب پاشیدن چه سود؟</div>
            </div>
          <div class="d-inline-block">
              <v-img
              src="/src/assets/poem.jpg"
              width="332"
              class="rounded-xl"
              ></v-img>
            </div>
        </div>
        <div class="end-page pt-4">
        <div class="w-100  reveal mt-4 px-0">
            <iframe src="https://www.aparat.com/video/video/embed/videohash/awu68q8/vt/frame" class="rounded-xl" frameborder="0"  height="190" width="332" ></iframe>
            </div>
        <div class="w-100  reveal mt-4 pb-4">
            <div class="mb-3 text-start font-weight-bold mr-6">
                <div>
                    سوره شمس :
                </div>
                </div>
            <audio controls>
                <source src="https://sedatoseda.com/wp-content/uploads/Abdul-Basit-Quran-16.mp3"></source>
            </audio>
        </div>
    </div>
    </div>
  </v-container>
</template>

<script setup>
import { onMounted } from "vue";

const observeReveal = () => {
  const revealEls = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => io.observe(el));
};
onMounted(() => {
  observeReveal();
  // observeSections();
  // window.addEventListener("scroll", onScroll, { passive: true });
});
</script>
<style lang="css">
html {
  scroll-behavior: smooth;
}
.reveal {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.reveal.show {
  opacity: 1;
  transform: translateY(0);
}

.top-container {
  height: 100vh;
  align-items: center;
  align-content: center;
}

.poem {
  line-height: 30px;
}
.end-page{
    background-color: #E0E0E0;
    margin: 10px -24px -24px -24px;
}
</style>
