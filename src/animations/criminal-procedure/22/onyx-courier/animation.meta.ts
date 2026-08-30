import { defineAnimationTypography } from '../../../../typography/animation-presets';

export const animationMeta = {
  id: 'onyx-courier' as const,
  title: '缺席审判程序——适用对象、国恐贪详解、程序保障链与到案后没收衔接',
  sourceReference: '客观/02-背诵卷/刑诉/2026-左宁/20-整理/22 专题三 缺席审判程序.md',
  route: 'objective/criminal-procedure/22/onyx-courier',
  subject: 'criminal-procedure' as const,
  chapter: '22',
};

export const typography = defineAnimationTypography({
  fontFamily: {
    primary: "'Noto Serif SC','Source Han Serif SC','SimSun',serif",
    fallback: "system-ui,-apple-system,'Segoe UI',Roboto,sans-serif",
  },
  headingWeight: 700,
  bodyWeight: 400,
  sizes: { display: 32, h1: 28, h2: 22, body: 16, caption: 13, micro: 11 },
});
