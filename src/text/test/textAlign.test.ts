import { expect, fixture } from "@open-wc/testing";
import { Text } from "../index";

describe("Text", () => {
  describe("textAlign", () => {
    it("shoul be used default textAlign when not set textAlign in constructor", async () => {
      const container = new Text();

      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-text__group__input-form__input-outer__input"
      ) as HTMLInputElement;

      expect(inputEl.getAttribute("textalign")).to.equal("left");
      expect(window.getComputedStyle(inputEl).textAlign).to.equal("left");
    });

    it("should be displayed based on textAlign set in constructor", async () => {
      const container = new Text({ textAlign: "right" });

      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-text__group__input-form__input-outer__input"
      ) as HTMLInputElement;

      expect(inputEl.getAttribute("textalign")).to.equal("right");
      expect(window.getComputedStyle(inputEl).textAlign).to.equal("right");
    });

    it("should be updated based on textAlign updated", async () => {
      const container = new Text();
      container.textAlign = "right";

      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-text__group__input-form__input-outer__input"
      ) as HTMLInputElement;

      expect(inputEl.getAttribute("textalign")).to.equal("right");
      expect(window.getComputedStyle(inputEl).textAlign).to.equal("right");
    });

    it("should be updated when replacing textAlign from left to right", async () => {
      const container = new Text({ textAlign: "left" });
      container.textAlign = "right";

      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-text__group__input-form__input-outer__input"
      ) as HTMLInputElement;

      expect(inputEl.getAttribute("textalign")).to.equal("right");
      expect(window.getComputedStyle(inputEl).textAlign).to.equal("right");
    });
  });
});
