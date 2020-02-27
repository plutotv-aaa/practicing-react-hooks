import jssVendorPrefixer from "jss-plugin-vendor-prefixer";
import jssCamelCase from "jss-plugin-camel-case";
import jssCompose from "jss-plugin-compose";
import jssDefaultUnit from "jss-plugin-default-unit";
import jssExpand from "jss-plugin-expand";
import jssExtend from "jss-plugin-extend";
// import jssIsolate from "jss-plugin-isolate";
import jssGlobal from "jss-plugin-global";
import jssNested from "jss-plugin-nested";
import jssPropsSort from "jss-plugin-props-sort";
import jssRuleValueFunction from "jss-plugin-rule-value-function";
import jssRuleValueObservable from "jss-plugin-rule-value-observable";
import jssTemplate from "jss-plugin-template";

// Subset of jss-preset-default with only the plugins the UI components are using.
export default function jssPreset() {
  return {
    plugins: [
      jssGlobal(),
      jssNested(),
      jssCamelCase(),
      jssDefaultUnit(),
      jssCompose(),
      jssExpand(),
      jssExtend(),
      // jssIsolate(),
      jssRuleValueFunction(),
      jssRuleValueObservable(),
      jssTemplate(),
      // Disable the vendor prefixer server-side, it does nothing.
      // This way, we can get a performance boost.
      // In the documentation, we are using `autoprefixer` to solve this problem.
      typeof window === "undefined" ? null : jssVendorPrefixer(),
      jssPropsSort()
    ]
  };
}
