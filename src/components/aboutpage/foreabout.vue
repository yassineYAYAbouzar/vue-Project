<template>
  <div class="Welcom-massege">
    <div class="container">
      <div class="items-abouT">
      <div class="content-about">
      <h2>AMT2PA</h2>
      <h3>Vision </h3>
      <p>L’Accelerated Mining Technology Transfer Platform for Africa (AMT2PA) est une plateforme d’innovation ouverte (Open innovation) qui vise le développement et le transfert technologique de nouveaux produits et services dans le secteur minier africain. Cette approche promeut un processus de formation, co-création et co-développement avec les usagers finaux dans des conditions réelles et s’appuie sur un écosystème de partenariats avec les parties prenantes.</p>
      <h3>Mission</h3>
      <p>Être un modèle innovant d’accélération du transfert technologique dans le secteur minier africain.</p>
      <h3>Objectifs </h3>
      <p>•	A l’échelle de l’UM6P et l’OCP S.A :
	Satisfaire les besoins de l’OCP en termes de développement d’innovations technologiques et managériales dans le domaine de l’industrie minière.
	Développer, à l’UM6P, une plateforme pour l’accélération du transfert technologique, la recherche appliquée et la formation.
	Œuvrer pour la création d’un écosystème R&D-Innovation-Entrepreneuriat, dans le cadre de l’open innovation.
•	A l’échelle nationale (Maroc) :
	Dynamisation de la recherche et l’exploration minière.
	Professionnalisation des opérateurs miniers artisanaux. 
	Amélioration de l’image, l’acceptabilité sociale et l’impact du secteur minier sur le développement local.
	Développement du capital humain qualifié et capitalisation du savoir nécessaire pour le développement et la pérennité du secteur.
•	A l’échelle africaine : Être un des outils opérationnels pour la mise en œuvre de la stratégie du Centre Africain du Développement Miner dicté par la VMA 2050, à travers : 
	Le renforcement des capacités technologiques et des compétences humaines pour l’exploration géologique et le développement minier.
	La capitalisation, le transfert technologique et le partage des informations.
	Le développement et expérimentation d’un modèle Développement durable et intégré. 
	La création d’un noyau d’experts et de consultants dans le secteur minier.
	La dynamisation de l’écosystème du secteur miner par la création d’un incubateur des start-ups minières.
</p>
      </div>
      <div class="sidebar">
            <div class="article">
            <i class="fa fa-globe fa-5x"></i>
            <h3>this is articel</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Vel rem quos impedit voluptatem ut? Dignissimos vel voluptatibus repellat,
                adipisci porro aliquam qui ab pariatur vitae sapiente, et asperiores. Delectus, minus.
            </p>
            </div>
            <div class="article">
            <i class="fa fa-exclamation-triangle fa-5x"></i>
            <h3>this is articel</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Vel rem quos impedit voluptatem ut? Dignissimos vel voluptatibus repellat,
                adipisci porro aliquam qui ab pariatur vitae sapiente, et asperiores. Delectus, minus.
            </p>
            </div>
            <div class="article">
            <i class="fa fa-share fa-5x"></i>
            <h3>this is articel</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Vel rem quos impedit voluptatem ut? Dignissimos vel voluptatibus repellat,
                adipisci porro aliquam qui ab pariatur vitae sapiente, et asperiores. Delectus, minus.
            </p>
            </div>
            <div class="article">
            <i class="fa fa-line-chart fa-5x"></i>
            <h3>this is articel</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Vel rem quos impedit voluptatem ut? Dignissimos vel voluptatibus repellat,
                adipisci porro aliquam qui ab pariatur vitae sapiente, et asperiores. Delectus, minus.
            </p>
            </div>
        <sidebar />
      </div>
      </div>
    </div>
  </div>   
</template>

<script>

export default {
  name: "welcomMassege",
};
</script>
<style scoped lang="scss">
.article{
  text-align: center;
}
.items-abouT {
    display: flex;
    justify-content: space-between;
}
.Welcom-massege {
    position: relative;
    top: 100px;
    text-align: left;
    margin-bottom: 20%;
    .content-about{
      width: 60%;
    }
}
h2::after {
    width: 16%;
    height: 11%;
    left: 0%;
}
</style>
