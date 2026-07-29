import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const output = new URL("../dist/client/index.html", import.meta.url);

test("renders the Caramel Cleaners homepage as static HTML", async () => {
  const html = await readFile(output, "utf8");

  assert.match(html, /<title>Caramel Cleaners \| Come Home to Clean<\/title>/i);
  assert.match(html, /Come home/);
  assert.match(html, /Caramel Cleaners/);
  assert.match(html, /Regular clean/);
  assert.match(html, /Deep clean/);
  assert.match(html, /Move clean/);
  assert.match(html, /Online booking coming soon/);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview/);
});
