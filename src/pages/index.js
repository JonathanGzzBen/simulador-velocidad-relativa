import Head from "next/head";
import Simulator from "../components/simulator";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Simulador Física 4</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Simulador de velocidad relativa Física 4</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          faucibus, felis ut congue mollis, erat eros gravida arcu, vitae
          eleifend justo augue ac metus. Pellentesque in arcu tristique, aliquet
          purus et, rhoncus risus. Aenean id lectus sed lorem dapibus dignissim.
          Vivamus hendrerit pulvinar ipsum, eget maximus tortor euismod id.
          Donec vel vehicula leo. Pellentesque interdum tortor libero, et
          tincidunt quam luctus at. Sed ac elit et odio volutpat molestie.
          Suspendisse dui elit, gravida at gravida vel, elementum bibendum enim.
          Phasellus vel lobortis est. Vivamus ultrices dolor vel massa mattis,
          at cursus ipsum viverra. Nam congue a lorem quis blandit. Vestibulum
          luctus porttitor porta. Phasellus ac volutpat magna. Aenean molestie,
          tortor sed mollis iaculis, dolor lacus rutrum orci, quis aliquam ex
          arcu eget urna.
        </p>
        <p>
          Pellentesque pulvinar dolor ligula, sit amet pulvinar mi posuere et.
          Nullam a molestie sem. Morbi commodo felis sapien, nec venenatis augue
          varius vel. Cras eget elit rhoncus, pharetra velit vitae, vestibulum
          ante. Aenean pellentesque risus in dignissim viverra. Duis porttitor
          nunc ac volutpat posuere. Etiam tincidunt vestibulum consequat. Sed ut
          fermentum nisl. Ut quis sem eget tellus commodo posuere. In ac mattis
          mauris. Aenean lobortis, diam quis consequat venenatis, lacus tortor
          placerat tellus, nec vestibulum leo arcu commodo lorem. Phasellus
          hendrerit neque orci, a sagittis dui tincidunt ut. Proin ultrices
          mauris quis libero interdum tempus at et sem. Sed aliquam tempor
          pretium.
        </p>
        <p>
          Aliquam erat volutpat. Morbi mattis ante neque. Pellentesque pulvinar
          justo vitae iaculis faucibus. Etiam rhoncus ex ut lobortis ornare. Sed
          varius odio nec bibendum facilisis. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Aenean interdum
          gravida viverra. Cras pellentesque arcu at suscipit rhoncus. Quisque
          at condimentum nibh, non suscipit ipsum. Proin vitae velit eget sapien
          dapibus aliquam et vitae nisl. Etiam laoreet, metus ac dignissim
          ultrices, risus ligula tincidunt sem, non laoreet orci turpis pulvinar
          orci. Sed eu elit ipsum. Curabitur ullamcorper blandit egestas. Fusce
          feugiat odio et tristique eleifend. Aliquam luctus a risus nec
          pellentesque. Pellentesque nunc lacus, hendrerit at arcu cursus,
          rutrum placerat felis.
        </p>
        <p>
          Proin fringilla dignissim justo, in pulvinar lectus accumsan a. Sed
          eget massa non elit facilisis accumsan. Sed condimentum venenatis
          sapien. Nullam varius justo velit, ac egestas ante bibendum quis. Sed
          egestas libero sit amet risus maximus, eu tincidunt leo tincidunt.
          Donec eget varius dolor, ac pulvinar massa. Pellentesque sit amet
          ornare sem, placerat hendrerit quam. Sed faucibus feugiat ipsum, sit
          amet finibus arcu lacinia in. Proin facilisis leo urna, ut commodo
          ante dictum posuere. Praesent vitae vehicula quam. Morbi tortor lorem,
          iaculis vitae sapien faucibus, dictum ornare arcu. Nam vitae risus
          vitae elit sollicitudin rutrum. Duis et metus placerat, placerat
          tellus at, scelerisque dolor.
        </p>
        <p>
          Phasellus vel finibus turpis. Praesent viverra porttitor convallis.
          Morbi commodo, mi in rutrum interdum, leo massa condimentum dui, in
          sollicitudin sem elit et ante. Vivamus laoreet scelerisque nunc, et
          semper enim mollis in. Nulla lacus ante, convallis sagittis ornare id,
          ultrices quis dolor. Aliquam vitae nisl ultrices, scelerisque arcu
          vel, imperdiet massa. Etiam ac aliquam eros, non consequat quam. Morbi
          eget tortor pulvinar, efficitur libero sed, tempor tellus. Morbi id
          urna at eros tincidunt tempor.
        </p>
        <Simulator />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
