(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0af116"],{"0d6b":function(e,a,s){"use strict";s.r(a);var t=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{attrs:{id:"extra-component-form-validation-demo"}},[e._m(0),s("div",{staticClass:"vx-row match-height"},[s("div",{staticClass:"vx-col sm:w-1/2 w-full"},[s("form-validation-custom-error-messages",{staticClass:"mb-base"})],1),s("div",{staticClass:"vx-col sm:w-1/2 w-full"})])])},r=[function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("p",{staticClass:"mb-4"},[s("a",{attrs:{href:"https://logaretm.github.io/vee-validate/guide/",target:"_blank",rel:"nofollow"}},[e._v("vee-validate")]),e._v(" is a Template Based Validation Framework for Vue.js. Read full documentation "),s("a",{attrs:{href:"https://baianat.github.io/vee-validate/guide/",target:"_blank",rel:"nofollow"}},[e._v("here")])])}],n=s("7bb1"),l=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("vx-card",{attrs:{title:"Simple form validation","code-toggler":""}},[s("p",[e._v("Simple form validation before submitting form. Add "),s("code",[e._v("v-validate")]),e._v(" directive to input.")]),s("div",{staticClass:"mt-5"},[s("form",[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"mt-5",attrs:{placeholder:"Input 1",name:"input1"},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("input1"),expression:"errors.has('input1')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("input1")))]),s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"mt-5",attrs:{placeholder:"Input 2",name:"input2"},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("input2"),expression:"errors.has('input2')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("input2")))]),s("vs-button",{staticClass:"mt-5 block",attrs:{type:"filled"},on:{click:function(a){return a.preventDefault(),e.submitForm(a)}}},[e._v("Submit")])],1)]),s("template",{slot:"codeContainer"},[e._v('\n<template>\n  <form>\n    <vs-input size="large" v-validate="\'required\'" placeholder="Input 1" name="input1" v-model="value1" class="mt-5" />\n    <span class="text-danger text-sm" v-show="errors.has(\'input1\')">'+e._s("{{ errors.first('input1') }}")+'</span>\n\n    <vs-input size="large" v-validate="\'required\'" placeholder="Input 2" name="input2" v-model="value2" class="mt-5" />\n    <span class="text-danger text-sm" v-show="errors.has(\'input2\')">'+e._s("{{ errors.first('input2') }}")+'</span>\n\n    <vs-button type="filled" @click.prevent="submitForm" class="mt-5 block">Submit</vs-button>\n  </form>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      value1: "",\n      value2: "",\n    }\n  },\n  methods: {\n    submitForm() {\n      this.$validator.validateAll().then(result => {\n        if(result) {\n          // if form have no errors\n          alert("form submitted!");\n        }else{\n          // form have errors\n        }\n      })\n    }\n  },\n}\n<\/script>\n        ')])],2)},i=[],o={data:function(){return{value1:"",value2:""}},methods:{submitForm:function(){alert("form submitted!")}}},m=o,d=s("2877"),v=Object(d["a"])(m,l,i,!1,null,null,null),c=v.exports,u=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("vx-card",{attrs:{title:"Validating multiple rules","code-toggler":""}},[s("p",[e._v("You can validate multiple rules using "),s("code",[e._v("|")]),e._v(". You can find more validation rules "),s("a",{attrs:{href:"https://baianat.github.io/vee-validate/guide/rules.html",target:"_blank",rel:"nofollow"}},[e._v("here")])]),s("div",{staticClass:"mt-5"},[s("form",[s("div",{staticClass:"vx-row lg:w-1/2 w-full"},[s("div",{staticClass:"vx-col w-full"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha",expression:"'required|alpha'"}],staticClass:"mt-5 w-full",attrs:{placeholder:"Your Name",name:"name"},model:{value:e.name,callback:function(a){e.name=a},expression:"name"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("name"),expression:"errors.has('name')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("name")))])],1),s("div",{staticClass:"vx-col lg:w-1/2 w-full"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha_dash",expression:"'required|alpha_dash'"}],staticClass:"mt-5 w-full",attrs:{placeholder:"Your Username",name:"username"},model:{value:e.username,callback:function(a){e.username=a},expression:"username"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("username"),expression:"errors.has('username')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("username")))])],1),s("div",{staticClass:"vx-col lg:w-1/2 w-full"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"mt-5 w-full",attrs:{placeholder:"Your Email",name:"email"},model:{value:e.email,callback:function(a){e.email=a},expression:"email"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("email")))])],1),s("div",{staticClass:"vx-col lg:w-1/2 w-full"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:6|max:10",expression:"'required|min:6|max:10'"}],ref:"password",staticClass:"mt-5 w-full",attrs:{type:"password",placeholder:"Your Password",name:"password"},model:{value:e.password,callback:function(a){e.password=a},expression:"password"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("password"),expression:"errors.has('password')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("password")))])],1),s("div",{staticClass:"vx-col lg:w-1/2 w-full"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:6|max:10|confirmed:password",expression:"'required|min:6|max:10|confirmed:password'"}],staticClass:"mt-5 w-full",attrs:{type:"password","data-vv-as":"password",placeholder:"Confirm Password",name:"confirm_password"},model:{value:e.confirm_password,callback:function(a){e.confirm_password=a},expression:"confirm_password"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("confirm_password"),expression:"errors.has('confirm_password')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("confirm_password")))])],1)]),s("vs-button",{staticClass:"mt-5 block",attrs:{type:"filled"},on:{click:function(a){return a.preventDefault(),e.submitForm(a)}}},[e._v("Submit")])],1)]),s("template",{slot:"codeContainer"},[e._v('\n<template>\n  <form>\n    <div class="vx-row w-1/2">\n\n      <div class="vx-col w-full">\n        <vs-input size="large" v-validate="\'required|alpha\'" placeholder="Your Name" name="name" v-model="name" class="mt-5 w-full" />\n        <span class="text-danger text-sm"  v-show="errors.has(\'name\')">'+e._s("{{ errors.first('name') }}")+'</span>\n      </div>\n\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'required|alpha_dash\'" placeholder="Your Username" name="username" v-model="username" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'username\')">'+e._s("{{ errors.first('username') }}")+'</span>\n      </div>\n\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'required|email\'" placeholder="Your Email" name="email" v-model="email" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'email\')">'+e._s("{{ errors.first('email') }}")+'</span>\n      </div>\n\n      <div class="vx-col w-1/2">\n        <vs-input type="password" size="large" v-validate="\'required|min:6|max:10\'" ref="password" placeholder="Your Password" name="password" v-model="password" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'password\')">'+e._s("{{ errors.first('password') }}")+'</span>\n      </div>\n\n      <div class="vx-col w-1/2">\n        <vs-input type="password" size="large" v-validate="\'required|min:6|max:10|confirmed:password\'" data-vv-as="password" placeholder="Confirm Password" name="confirm_password" v-model="confirm_password" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'confirm_password\')">'+e._s("{{ errors.first('confirm_password') }}")+'</span>\n      </div>\n    </div>\n\n    <vs-button type="filled" @click.prevent="submitForm" class="mt-5 block">Submit</vs-button>\n  </form>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      name: "",\n      username: "",\n      email: "",\n      password: "",\n      confirm_password: "",\n    }\n  },\n  methods: {\n    submitForm() {\n      this.$validator.validateAll().then(result => {\n        if (result) {\n          // if form have no errors\n          alert("form submitted!");\n        } else {\n          // form have errors\n        }\n      })\n    }\n  },\n}\n<\/script>\n        ')])],2)},p=[],h={data:function(){return{name:"",username:"",email:"",password:"",confirm_password:""}},methods:{submitForm:function(){this.$validator.validateAll().then((function(e){e&&alert("form submitted!")}))}}},x=h,w=Object(d["a"])(x,u,p,!1,null,null,null),f=w.exports,_=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("vx-card",{attrs:{title:"Custom error messages","code-toggler":""}},[s("p",[e._v("With vee-validate you can display your own custom error messages")]),s("div",{staticClass:"mt-5"},[s("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(a){var t=a.handleSubmit;return[s("form",[s("ValidationProvider",{attrs:{name:"first_name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var t=a.errors;return[s("vs-input",{staticClass:"mt-5",attrs:{placeholder:"First Name",name:"first_name",required:""},model:{value:e.first_name,callback:function(a){e.first_name=a},expression:"first_name"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:t.length>0,expression:"errors.length > 0"}],staticClass:"text-danger text-sm"},[e._v(e._s(t[0]))])]}}],null,!0)}),s("ValidationProvider",{attrs:{name:"last_name",rules:""},scopedSlots:e._u([{key:"default",fn:function(a){var t=a.errors;return[s("vs-input",{staticClass:"mt-5",attrs:{placeholder:"Last Name",name:"last_name"},model:{value:e.last_name,callback:function(a){e.last_name=a},expression:"last_name"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:t.length>0,expression:"errors.length > 0"}],staticClass:"text-danger text-sm"},[e._v(e._s(t[0]))])]}}],null,!0)}),s("vs-button",{staticClass:"mt-5 block",attrs:{type:"filled"},on:{click:function(a){return a.preventDefault(),t(e.submitForm)}}},[e._v("Submit")])],1)]}}])})],1),s("template",{slot:"codeContainer"},[e._v('\n<template>\n  <form>\n    <vs-input size="large" v-validate="\'required|alpha\'" placeholder="First Name" name="first_name" v-model="first_name" class="mt-5" />\n    <span class="text-danger text-sm" v-show="errors.has(\'first_name\')">'+e._s("{{ errors.first('first_name') }}")+'</span>\n\n    <vs-input size="large" v-validate="\'required|alpha\'" placeholder="Last Name" name="last_name" v-model="last_name" class="mt-5" />\n    <span class="text-danger text-sm" v-show="errors.has(\'last_name\')">'+e._s("{{ errors.first('last_name') }}")+'</span>\n    <vs-button type="filled" @click.prevent="submitForm" class="mt-5 block">Submit</vs-button>\n  </form>\n</template>\n\n<script>\n// For custom error message\nimport { Validator } from \'vee-validate\';\nconst dict = {\n  custom: {\n    first_name: {\n      required: \'Please enter your first name\',\n      alpha: "Your first name may only contain alphabetic characters"\n    },\n    last_name: {\n      required: \'Please enter your last name\',\n      alpha: "Your last name may only contain alphabetic characters"\n    },\n  }\n};\n\n// register custom messages\nValidator.localize(\'en\', dict);\n\nexport default {\n  data() {\n    return {\n      first_name: "",\n      last_name: "",\n    }\n  },\n  methods: {\n    submitForm() {\n      this.$validator.validateAll().then(result => {\n        if (result) {\n          // if form have no errors\n          alert("form submitted!");\n        } else {\n          // form have errors\n        }\n      })\n    }\n  },\n}\n<\/script>\n    ')])],2)},b=[],g={components:{ValidationObserver:n["a"],ValidationProvider:n["b"]},data:function(){return{first_name:"",last_name:""}},methods:{submitForm:function(){alert("form submitted!")}}},C=g,y=Object(d["a"])(C,_,b,!1,null,null,null),N=y.exports,k=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("vx-card",{attrs:{title:"Change default event for form validation","code-toggler":""}},[s("p",[e._v("You can change default event when validation triggers using "),s("code",[e._v("data-vv-validate-on")])]),s("div",{staticClass:"mt-5"},[s("form",[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha",expression:"'required|alpha'"}],staticClass:"mt-5",attrs:{placeholder:"First Name",name:"first_name","data-vv-validate-on":"blur"},model:{value:e.first_name,callback:function(a){e.first_name=a},expression:"first_name"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("first_name"),expression:"errors.has('first_name')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("first_name")))]),s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha",expression:"'required|alpha'"}],staticClass:"mt-5",attrs:{placeholder:"Last Name",name:"last_name","data-vv-validate-on":"blur"},model:{value:e.last_name,callback:function(a){e.last_name=a},expression:"last_name"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("last_name"),expression:"errors.has('last_name')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("last_name")))]),s("vs-button",{staticClass:"mt-5 block",attrs:{type:"filled"},on:{click:function(a){return a.preventDefault(),e.submitForm(a)}}},[e._v("Submit")])],1)]),s("template",{slot:"codeContainer"},[e._v('\n<template>\n  <form>\n    <vs-input size="large" v-validate="\'required|alpha\'" placeholder="First Name" name="first_name" v-model="first_name" class="mt-5" data-vv-validate-on="blur" />\n    <span class="text-danger text-sm" v-show="errors.has(\'first_name\')">'+e._s("{{ errors.first('first_name') }}")+'</span>\n\n    <vs-input size="large" v-validate="\'required|alpha\'" placeholder="Last Name" name="last_name" v-model="last_name" class="mt-5" data-vv-validate-on="blur" />\n    <span class="text-danger text-sm" v-show="errors.has(\'last_name\')">'+e._s("{{ errors.first('last_name') }}")+'</span>\n\n    <vs-button type="filled" @click.prevent="submitForm" class="mt-5 block">Submit</vs-button>\n  </form>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      first_name: "",\n      last_name: "",\n    }\n  },\n  methods: {\n    submitForm() {\n      this.$validator.validateAll().then(result => {\n        if(result) {\n          // if form have no errors\n          alert("form submitted!");\n        }else{\n          // form have errors\n        }\n      })\n    }\n  },\n}\n<\/script>\n        ')])],2)},q=[],M={data:function(){return{first_name:"",last_name:""}},methods:{submitForm:function(){this.$validator.validateAll().then((function(e){e&&alert("form submitted!")}))}}},F=M,z=Object(d["a"])(F,k,q,!1,null,null,null),V=z.exports,O=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("vx-card",{attrs:{title:"Validation types","code-toggler":""}},[s("p",[e._v("VeeValidate comes with a bunch of validation rules out of the box and cover most validation needs")]),s("div",{staticClass:"mt-5"},[s("form",[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-1/2"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"mt-5 w-full",attrs:{label:"This field is required",name:"required"},model:{value:e.required,callback:function(a){e.required=a},expression:"required"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("required"),expression:"errors.has('required')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("required")))])],1),s("div",{staticClass:"vx-col w-1/2"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"alpha",expression:"'alpha'"}],staticClass:"mt-5 w-full",attrs:{label:"Only alphabetic characters",name:"alpha"},model:{value:e.alpha,callback:function(a){e.alpha=a},expression:"alpha"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("alpha"),expression:"errors.has('alpha')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("alpha")))])],1),s("div",{staticClass:"vx-col w-1/2"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"alpha_dash",expression:"'alpha_dash'"}],staticClass:"mt-5 w-full",attrs:{label:"Only alphabetic characters, numbers, dashes or underscores",name:"alpha_dash"},model:{value:e.alpha_dash,callback:function(a){e.alpha_dash=a},expression:"alpha_dash"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("alpha_dash"),expression:"errors.has('alpha_dash')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("alpha_dash")))])],1),s("div",{staticClass:"vx-col w-1/2"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"alpha_num",expression:"'alpha_num'"}],staticClass:"mt-5 w-full",attrs:{label:"May contain alphabetic characters or numbers",name:"alpha_num"},model:{value:e.alpha_num,callback:function(a){e.alpha_num=a},expression:"alpha_num"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("alpha_num"),expression:"errors.has('alpha_num')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("alpha_num")))])],1),s("div",{staticClass:"vx-col w-1/2"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"numeric",expression:"'numeric'"}],staticClass:"mt-5 w-full",attrs:{label:"Must only consist of numbers",name:"numeric"},model:{value:e.numeric,callback:function(a){e.numeric=a},expression:"numeric"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("numeric"),expression:"errors.has('numeric')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("numeric")))])],1),s("div",{staticClass:"vx-col w-1/2"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"alpha_spaces",expression:"'alpha_spaces'"}],staticClass:"mt-5 w-full",attrs:{label:"Only alphabetic characters or spaces",name:"alpha_spaces"},model:{value:e.alpha_spaces,callback:function(a){e.alpha_spaces=a},expression:"alpha_spaces"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("alpha_spaces"),expression:"errors.has('alpha_spaces')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("alpha_spaces")))])],1),s("div",{staticClass:"vx-col w-1/2"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"email",expression:"'email'"}],staticClass:"mt-5 w-full",attrs:{label:"Must be a valid email",name:"email"},model:{value:e.email,callback:function(a){e.email=a},expression:"email"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("email")))])],1),s("div",{staticClass:"vx-col w-1/2"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"url:require_protocol",expression:"'url:require_protocol'"}],staticClass:"mt-5 w-full",attrs:{"data-vv-as":"field",label:"Must be a valid url",name:"url"},model:{value:e.url,callback:function(a){e.url=a},expression:"url"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("url"),expression:"errors.has('url')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("url")))])],1),s("div",{staticClass:"vx-col w-1/2"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"min:3",expression:"'min:3'"}],staticClass:"mt-5 w-full",attrs:{label:"Length should not be less than the specified length : 3",name:"min"},model:{value:e.min,callback:function(a){e.min=a},expression:"min"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("min"),expression:"errors.has('min')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("min")))])],1),s("div",{staticClass:"vx-col w-1/2"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"max:6",expression:"'max:6'"}],staticClass:"mt-5 w-full",attrs:{label:"Length may not exceed the specified length : 6",name:"max"},model:{value:e.max,callback:function(a){e.max=a},expression:"max"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("max"),expression:"errors.has('max')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("max")))])],1),s("div",{staticClass:"vx-col w-1/2"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"min:6|max:10",expression:"'min:6|max:10'"}],ref:"password",staticClass:"mt-5 w-full",attrs:{type:"password",label:"Password 1",name:"password"},model:{value:e.password,callback:function(a){e.password=a},expression:"password"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("password"),expression:"errors.has('password')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("password")))])],1),s("div",{staticClass:"vx-col w-1/2"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"min:6|max:10|confirmed:password",expression:"'min:6|max:10|confirmed:password'"}],staticClass:"mt-5 w-full",attrs:{type:"password",label:"Confirm Password",name:"confirm_password","data-vv-as":"password"},model:{value:e.confirm_password,callback:function(a){e.confirm_password=a},expression:"confirm_password"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("confirm_password"),expression:"errors.has('confirm_password')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("confirm_password")))])],1),s("div",{staticClass:"vx-col w-1/2"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"date_format:dd/MM/yyyy",expression:"'date_format:dd/MM/yyyy'"}],staticClass:"mt-5 w-full",attrs:{label:"Date Format: dd/MM/yyyy",name:"date_format"},model:{value:e.date_format,callback:function(a){e.date_format=a},expression:"date_format"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("date_format"),expression:"errors.has('date_format')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("date_format")))])],1),s("div",{staticClass:"vx-col w-1/2"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"between:1,11",expression:"'between:1,11'"}],staticClass:"mt-5 w-full",attrs:{label:"Numeric value between minimum value and a maximum value : 1 and 11",name:"between"},model:{value:e.between,callback:function(a){e.between=a},expression:"between"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("between"),expression:"errors.has('between')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("between")))])],1),s("div",{staticClass:"vx-col w-1/2"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"credit_card",expression:"'credit_card'"}],staticClass:"mt-5 w-full",attrs:{label:"Valid credit card",name:"credit_card"},model:{value:e.credit_card,callback:function(a){e.credit_card=a},expression:"credit_card"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("credit_card"),expression:"errors.has('credit_card')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("credit_card")))])],1),s("div",{staticClass:"vx-col w-1/2"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"date_format:dd/MM/yyyy|date_between:10/09/2016,20/09/2016",expression:"'date_format:dd/MM/yyyy|date_between:10/09/2016,20/09/2016'"}],staticClass:"mt-5 w-full",attrs:{label:"Must be a valid date between the two dates specified : 10/09/2016 - 20/09/2016",name:"date_between"},model:{value:e.date_between,callback:function(a){e.date_between=a},expression:"date_between"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("date_between"),expression:"errors.has('date_between')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("date_between")))])],1),s("div",{staticClass:"vx-col w-1/2"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"digits:3",expression:"'digits:3'"}],staticClass:"mt-5 w-full",attrs:{label:"Must be numeric and have the specified number of digits : 3",name:"digits"},model:{value:e.digits,callback:function(a){e.digits=a},expression:"digits"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("digits"),expression:"errors.has('digits')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("digits")))])],1),s("div",{staticClass:"vx-col w-1/2"},[s("vs-select",{directives:[{name:"validate",rawName:"v-validate",value:"included:1,3",expression:"'included:1,3'"}],staticClass:"select-large mt-5 w-full",attrs:{name:"included",label:"Must have a value that is in the specified list : 1 or 3"},model:{value:e.select1,callback:function(a){e.select1=a},expression:"select1"}},e._l(e.options1,(function(e,a){return s("vs-select-item",{key:a,attrs:{value:e.value,text:e.text}})})),1),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("included"),expression:"errors.has('included')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("included")))])],1),s("div",{staticClass:"vx-col w-1/2"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"max_value:100",expression:"'max_value:100'"}],staticClass:"mt-5 w-full",attrs:{label:"Numeric value and must not be greater than the specified value : 100",name:"max_value"},model:{value:e.max_value,callback:function(a){e.max_value=a},expression:"max_value"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("max_value"),expression:"errors.has('max_value')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("max_value")))])],1),s("div",{staticClass:"vx-col w-1/2"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"min_value:10",expression:"'min_value:10'"}],staticClass:"mt-5 w-full",attrs:{label:"Numeric value and must not be less than the specified value : 10",name:"min_value"},model:{value:e.min_value,callback:function(a){e.min_value=a},expression:"min_value"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("min_value"),expression:"errors.has('min_value')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("min_value")))])],1),s("div",{staticClass:"vx-col w-full"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:{regex:"^([0-9]+)$"},expression:"{regex: '^([0-9]+)$' }"}],staticClass:"mt-5 w-full",attrs:{label:"Must match the specified regular expression : ^([0-9]+)$ - numbers only",name:"regex"},model:{value:e.regex,callback:function(a){e.regex=a},expression:"regex"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("regex"),expression:"errors.has('regex')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("regex")))])],1)]),s("vs-button",{staticClass:"mt-5 block",attrs:{type:"filled"},on:{click:function(a){return a.preventDefault(),e.submitForm(a)}}},[e._v("Submit")])],1)]),s("template",{slot:"codeContainer"},[e._v('\n<template>\n  <form>\n    <div class="vx-row">\n\n      \x3c!-- required --\x3e\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'required\'" label="This field is required" name="required" v-model="required" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'required\')">'+e._s("{{ errors.first('required') }}")+'</span>\n      </div>\n\n      \x3c!-- Only alphabetic characters --\x3e\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'alpha\'" label="Only alphabetic characters" name="alpha" v-model="alpha" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'alpha\')">'+e._s("{{ errors.first('alpha') }}")+'</span>\n      </div>\n\n      \x3c!-- Only alphabetic characters, numbers, dashes or underscores --\x3e\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'alpha_dash\'" label="Only alphabetic characters, numbers, dashes or underscores" name="alpha_dash" v-model="alpha_dash" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'alpha_dash\')">'+e._s("{{ errors.first('alpha_dash') }}")+'</span>\n      </div>\n\n      \x3c!-- May contain alphabetic characters or numbers --\x3e\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'alpha_num\'" label="May contain alphabetic characters or numbers" name="alpha_num" v-model="alpha_num" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'alpha_num\')">'+e._s("{{ errors.first('alpha_num') }}")+'</span>\n      </div>\n\n      \x3c!-- Must only consist of numbers --\x3e\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'numeric\'" label="Must only consist of numbers" name="numeric" v-model="numeric" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'numeric\')">'+e._s("{{ errors.first('numeric') }}")+'</span>\n      </div>\n\n      \x3c!-- Only alphabetic characters or spaces --\x3e\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'alpha_spaces\'" label="Only alphabetic characters or spaces" name="alpha_spaces" v-model="alpha_spaces" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'alpha_spaces\')">'+e._s("{{ errors.first('alpha_spaces') }}")+'</span>\n      </div>\n\n      \x3c!-- Must be a valid email --\x3e\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'email\'" label="Must be a valid email" name="email" v-model="email" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'email\')">'+e._s("{{ errors.first('email') }}")+'</span>\n      </div>\n\n      \x3c!-- Must be a valid url --\x3e\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'url:require_protocol\'" data-vv-as="field" label="Must be a valid url" name="url" v-model="url" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'url\')">'+e._s("{{ errors.first('url') }}")+'</span>\n      </div>\n\n      \x3c!-- Length should not be less than the specified length : 3 --\x3e\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'min:3\'" label="Length should not be less than the specified length : 3" name="min" v-model="min" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'min\')">'+e._s("{{ errors.first('min') }}")+'</span>\n      </div>\n\n      \x3c!-- Length may not exceed the specified length : 6 --\x3e\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'max:6\'" label="Length may not exceed the specified length : 6" name="max" v-model="max" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'max\')">'+e._s("{{ errors.first('max') }}")+'</span>\n      </div>\n\n      \x3c!-- Password 1 --\x3e\n      <div class="vx-col w-1/2">\n        <vs-input type="password" size="large" v-validate="\'min:6|max:10\'" label="Password 1" name="password" v-model="password" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'password\')">'+e._s("{{ errors.first('password') }}")+'</span>\n      </div>\n\n      \x3c!-- Confirm Password --\x3e\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'min:6|max:10|confirmed:password\'" label="Confirm Password" name="confirm_password" v-model="confirm_password" class="mt-5 w-full" data-vv-as="password" />\n        <span class="text-danger text-sm" v-show="errors.has(\'confirm_password\')">'+e._s("{{ errors.first('confirm_password') }}")+'</span>\n      </div>\n\n      \x3c!-- Date Format: dd/MM/yyyy --\x3e\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'date_format:dd/MM/yyyy\'" label="Date Format: dd/MM/yyyy" name="date_format" v-model="date_format" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'date_format\')">'+e._s("{{ errors.first('date_format') }}")+'</span>\n      </div>\n\n      \x3c!-- Numeric value between minimum value and a maximum value : 1 and 11 --\x3e\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'between:1,11\'" label="Numeric value between minimum value and a maximum value : 1 and 11" name="between" v-model="between" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'between\')">'+e._s("{{ errors.first('between') }}")+'</span>\n      </div>\n\n      \x3c!-- Valid credit card --\x3e\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'credit_card\'" label="Valid credit card" name="credit_card" v-model="credit_card" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'credit_card\')">'+e._s("{{ errors.first('credit_card') }}")+'</span>\n      </div>\n\n      \x3c!-- Must be a valid date between the two dates specified : 10/09/2016 - 20/09/2016 --\x3e\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'date_format:dd/MM/yyyy|date_between:10/09/2016,20/09/2016\'" label="Must be a valid date between the two dates specified : 10/09/2016 - 20/09/2016" name="date_between" v-model="date_between" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'date_between\')">'+e._s("{{ errors.first('date_between') }}")+'</span>\n      </div>\n\n      \x3c!-- Must be numeric and have the specified number of digits : 3 --\x3e\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'digits:3\'" label="Must be numeric and have the specified number of digits : 3" name="digits" v-model="digits" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'digits\')">'+e._s("{{ errors.first('digits') }}")+'</span>\n      </div>\n\n      \x3c!-- Must have a value that is in the specified list : 1 or 3 --\x3e\n      <div class="vx-col w-1/2">\n        <vs-select v-validate="\'included:1,3\'" v-model="select1" name="included" label="Must have a value that is in the specified list : 1 or 3" class="select-large mt-5 w-full">\n          <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options1" />\n        </vs-select>\n        <span class="text-danger text-sm" v-show="errors.has(\'included\')">'+e._s("{{ errors.first('included') }}")+'</span>\n      </div>\n\n      \x3c!-- Numeric value and must not be greater than the specified value : 100 --\x3e\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'max_value:100\'" label="Numeric value and must not be greater than the specified value : 100" name="max_value" v-model="max_value" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'max_value\')">'+e._s("{{ errors.first('max_value') }}")+'</span>\n      </div>\n\n      \x3c!-- Numeric value and must not be less than the specified value : 10 --\x3e\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'min_value:10\'" label="Numeric value and must not be less than the specified value : 10" name="min_value" v-model="min_value" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'min_value\')">'+e._s("{{ errors.first('min_value') }}")+'</span>\n      </div>\n\n      \x3c!-- Must match the specified regular expression : ^([0-9]+)$ - numbers only --\x3e\n      <div class="vx-col w-full">\n        <vs-input size="large" v-validate="{regex: \'^([0-9]+)$\' }" label="Must match the specified regular expression : ^([0-9]+)$ - numbers only" name="regex" v-model="regex" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'regex\')">'+e._s("{{ errors.first('regex') }}")+'</span>\n      </div>\n    </div>\n    <vs-button type="filled" @click.prevent="submitForm" class="mt-5 block">Submit</vs-button>\n  </form>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      required: "",\n      alpha: "",\n      alpha_dash: "",\n      alpha_num: "",\n      numeric: "",\n      alpha_spaces: "",\n      email: "",\n      url: "",\n      min: "",\n      max: "",\n      password: "",\n      confirm_password: "",\n      date_format: "",\n      between: "",\n      credit_card: "",\n      date_between: "",\n      digits: "",\n      select1: "",\n      options1: [\n        { text: "One", value: 1 },\n        { text: "Two", value: 2 },\n        { text: "Three", value: 3 },\n        { text: "Four", value: 4 },\n        { text: "Five", value: 5 },\n      ],\n      max_value: "",\n      min_value: "",\n      regex: "",\n    }\n  },\n  methods: {\n    submitForm() {\n      this.$validator.validateAll().then(result => {\n        if (result) {\n          // if form have no errors\n          alert("form submitted!");\n        } else {\n          // form have errors\n        }\n      })\n    }\n  },\n}\n<\/script>\n        ')])],2)},$=[],S={data:function(){return{required:"",alpha:"",alpha_dash:"",alpha_num:"",numeric:"",alpha_spaces:"",email:"",url:"",min:"",max:"",password:"",confirm_password:"",date_format:"",between:"",credit_card:"",date_between:"",digits:"",select1:"",options1:[{text:"One",value:1},{text:"Two",value:2},{text:"Three",value:3},{text:"Four",value:4},{text:"Five",value:5}],max_value:"",min_value:"",regex:""}},methods:{submitForm:function(){this.$validator.validateAll().then((function(e){e&&alert("form submitted!")}))}}},P=S,Y=Object(d["a"])(P,O,$,!1,null,null,null),E=Y.exports;Object(n["localize"])({en:{messages:{required:"this field is required",min:"this field must have no less than {length} characters",max:function(e,a){var s=a.length;return"this field must have no more than ".concat(s," characters")}}}});var L={components:{FormValidationSimple:c,FormValidationMultipleRules:f,FormValidationCustomErrorMessages:N,FormValidationEvents:V,FormValidationTypes:E,ValidationProvider:n["b"],ValidationObserver:n["a"]}},A=L,j=Object(d["a"])(A,t,r,!1,null,null,null);a["default"]=j.exports}}]);
//# sourceMappingURL=chunk-2d0af116.fb3295ce.js.map