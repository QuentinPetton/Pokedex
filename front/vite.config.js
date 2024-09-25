import { parse } from "node:path";
import { glob } from "glob";
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  plugins: [
    injectHTMLTemplates(),
    handlebars({
      partialDirectory: await getDirectoriesContainingHTMLFiles(),
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: scopePagesCSS
      }
    }
  }
});


async function getDirectoriesContainingHTMLFiles() {
  const files = await glob("./src/**/*.html", { absolute: true });
  return [...new Set(files.map(filename => parse(filename).dir))];
}

async function scopePagesCSS(content, filename) {
  if (filename.includes("/pages/")) {
    const pageName = parse(filename).name;
    return { content: `#page-${pageName} { ${content} }` };
  }
  return { content };
}

function injectHTMLTemplates() {
  return {
    transformIndexHtml: {
      order: "pre", // Ensure it's called before handlebar plugin
      async handler(html) {
        const files = await glob("./src/pages/**/*.html", { absolute: true });
        const templates = files
          .map(file => parse(file).name)
          .map(page => `<template data-page="${page}">{{> ${page} }}</template>`)
          .join("");
        
        return html.replace("</html>", `${templates}</html>`);
      }
    }
  };
}
