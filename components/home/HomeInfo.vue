<script setup>
const cards = [
  {
    backgroundImage: '/assets/images/home/c-storages.png',
    titleComplex: [
      {
        text: 'Сеть складов',
        bold: true,
        large: true
      },
      {
        text: 'по всей России',
        large: true
      },
      {
        text: '18 городов',
        bold: true,
        large: true
      },
    ]
  },
  {
    backgroundImage: '/assets/images/home/c-cold.png',
    titleComplex: [
      {
        text: 'Более',
        large: true,
      },
      {
        text: '1 000 000',
        large: true,
      },
      {
        text: 'кубов холода',
      },
      {
        text: 'мы произвели',
      },
      {
        text: 'за 12 лет',
        large: true,
      },
    ],
    actionText: 'Сертификаты'
  },
  {
    backgroundImage: 'assets/images/home/c-reviews.png',
    titleComplex: [
      {
        text: '7035'
      },
      {
        text: 'довольных клиентов'
      },
      {
        text: '(на 12.08.20)',
        small: true
      }
    ],
    actionText: 'Отзывы'
  }
]

const SvgDelivery = () => import('/assets/svg/illusDelivery.svg'),
      SvgPayments = () => import('/assets/svg/illusPayment.svg'),
      SvgGaranty = () => import('/assets/svg/garanty.svg'),
      SvgDialog = () => import('/assets/svg/dialog.svg')


</script>

<template>
  <section>
    <MmmSection
      transparent
    >
      <InfoButton
        title="О доставке"
        alt="Доставка по России"
      >
        <SvgDelivery/>
      </InfoButton>

      <InfoButton
        title="Способы оплаты"
        alt="Оплата наличными, картой, на счет, а также..."
        bg="linear-gradient(120.56deg, #4B1B86 23.58%, #21629C 94.38%);"
      ><SvgPayments/></InfoButton>

      <InfoButton
        picture-url="~assets/images/illusDelivery.svg"
        title="Гарантия"
        alt="Год гарантии на большинство товаров"
        bg="    linear-gradient(120.56deg, #1E1B86 23.58%, #219C8B 94.38%);"
      ><SvgGaranty/></InfoButton>
    </MmmSection>
    <MmmSection transparent>
      <MmmHorizontal :buttons="true">
        <MmmHorizontalItem
          v-for="(card, index) in cards"
          :key="index"
        >
          <InfoCard
            v-bind="card"
          />
        </MmmHorizontalItem>
      </MmmHorizontal>
    </MmmSection>
    <MmmSection transparent>
      <div class="cardContact">
        <div class="cardContact__header">
          Остались вопросы?
        </div>
        <MmmButton link on-dark>Заказать звонок</MmmButton>
        <div class="cardContact__subtitle">
          или позвоните нам:
        </div>
        <div class="cardContact__phone">
          8 800 3000 500
        </div>
        <div class="cardContact__pic">
          <SvgDialog />
        </div>
      </div>
    </MmmSection>
  </section>
</template>

<style lang="scss">
  .cardContact {
    position: relative;
    @include vmin(padding, 21px);
    border-radius: 21px;
    color: $light;
    @include mfs(21px);
    font-weight: 400;
    background: linear-gradient(104.34deg, #0F4C81 -3.95%, #0B9B9B 101.28%);
    width: 85%;

    &__title {
      font-weight: 500
    }

    &__phone {
      font-weight: 500;
      @include mfs(25px);
    }

    &__pic {
      position: absolute;
      top: 21px;
      right: -68px;
      width: 125px;
      height: 90px;
    }
  }
</style>
