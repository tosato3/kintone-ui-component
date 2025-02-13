module.exports = {
  create: function(context) {
    return {
      ClassDeclaration: function(node) {
        const superClass = node.superClass.name;
        if (superClass !== "KucBase") return;
        const sourceCode = context.getSourceCode().getText();
        // eslint-disable-next-line no-template-curly-in-string
        const pattern = '\\sid="(?!\\${this._GUID}-)[^"]+"';
        const regex = new RegExp(pattern, "g");
        if (!regex.test(sourceCode)) return;
        context.report({
          node: node,
          message: `Please put uuid to id using generateGUID function
          ex: <div
                class="kuc-multi-choice__group__label"
                id="${this._GUID}-label">
              </div>`
        });
      }
    };
  }
};
