import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".digitalhouse",
  `Un diagnóstico automotriz es un servicio mecánico que nos ayuda a identificar una falla en específico o situaciones anormales en el carro. Este servicio se realiza con personal calificado y un conjunto de herramientas adecuadas para encontrar la falla.`,
  "Diagnostico",
  "Diagnostico",
  "1996 - 2023"
);

hoverChangeExperience(
  ".zuplae",
  `Mantenimiento, inspeccion y reparación de automoviles y motocicletas tanto convencionales como los modelos menos tradicionales. Cambio de Aceite, Preparación de suspensiones, Etc…`,
  "Motores, inyeccion, tren delantero y aire acondicionado",
  "Motores, inyeccion, tren delantero y aire acondicionado",
  "1996 - 2023"
);

hoverChangeExperience(
  ".codigofontetv",
  `Un conjunto de técnicas y procesos destinados a la limpieza, rejuvenecimiento y protección de las distintas superficies de un vehículo.`,
  "Estetica vehicular",
  "Estetica vehicular",
  "1996 - 2023"
);

hoverChangeExperience(
  ".contweb",
  `Un conjunto de técnicas y procesos destinados a la limpieza, rejuvenecimiento y protección de las distintas superficies de un vehículo.`,
  "Restauracion",
  "Restauracion",
  "1996 - 2023"
);

hoverChangeDescription(
  ".html",
  "HTML é uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
);
hoverChangeDescription(
  ".css",
  "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".js",
  "JavaScript é uma linguagem de programação que permite a você implementar elementos dinâmicos em páginas web."
);
hoverChangeDescription(
  ".sass",
  "Sass é um pré-processador CSS que adiciona alguns recursos que não estão disponíveis de forma nativa."
);
hoverChangeDescription(
  ".react",
  "React é uma biblioteca JavaScript com foco em criar interfaces de usuário de forma componetizada."
);
hoverChangeDescription(
  ".next",
  "Next.js é uma estrutura da web que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para web baseados em React."
);
hoverChangeDescription(
  ".styled",
  "styled-components é uma biblioteca que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript."
);
hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS é um framework CSS que nos fornece classes utilitárias com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".typescript",
  "TypeScript é um superset do JavaScript que incluir recursos que não estão presentes na linguagem de forma nativa, além de torná-la estática."
);
hoverChangeDescription(
  ".radix",
  "Radix é uma biblioteca que fornece componentes acessíveis e sem estilos para a criação de aplicação em React."
);
hoverChangeDescription(
  ".cypress",
  "Cypress é um framework para automação de testes end-to-end, onde atualmente usa a linguagem JavaScript."
);
hoverChangeDescription(
  ".storybook",
  "Storybook é uma ferramenta que tem como objetivo documentar e testar os componentes da aplicação."
);
