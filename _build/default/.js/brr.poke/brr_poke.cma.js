(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_jsstring_of_string=runtime.caml_jsstring_of_string,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_string_of_jsstring=runtime.caml_string_of_jsstring;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    function caml_call5(f,a0,a1,a2,a3,a4)
     {return f.length == 5
              ?f(a0,a1,a2,a3,a4)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_install_printer_Brr_poke_p=
      caml_string_of_jsbytes("#install_printer Brr_poke.pp_jstr;;"),
     cst_install_printer_Brr_poke_p$0=
      caml_string_of_jsbytes("#install_printer Brr_poke.pp_jv_error;;"),
     cst_install_printer_Brr_poke_p$1=
      caml_string_of_jsbytes("#install_printer Brr_poke.pp_jv;;"),
     cst$0=caml_string_of_jsbytes(""),
     cst_null=caml_string_of_jsbytes("null"),
     cst_undefined=caml_string_of_jsbytes("undefined"),
     cst=caml_string_of_jsbytes(""),
     Stdlib_sys=global_data.Stdlib__sys,
     Js_of_ocaml_Sys_js=global_data.Js_of_ocaml__Sys_js,
     Jv=global_data.Jv,
     Stdlib_format=global_data.Stdlib__format,
     Js_of_ocaml_toplevel_JsooTop=global_data.Js_of_ocaml_toplevel__JsooTop,
     Stdlib_buffer=global_data.Stdlib__buffer,
     Stdlib=global_data.Stdlib,
     _a_=
      [0,
       [18,
        [1,[0,0,caml_string_of_jsbytes("")]],
        [11,caml_string_of_jsbytes("Jstr.v "),[3,0,[17,0,0]]]],
       caml_string_of_jsbytes("@[Jstr.v %S@]")];
    function js_to_string(o)
     {if(caml_call1(Jv[6],o))return cst_null;
      if(caml_call1(Jv[7],o))return cst_undefined;
      var _i_=o.toString();
      return caml_call1(Jv[24],_i_)}
    function pp_jv(ppf,v)
     {var _h_=js_to_string(v);return caml_call2(Stdlib_format[13],ppf,_h_)}
    function pp_jstr(ppf,s)
     {var _g_=caml_string_of_jsstring(s);
      return caml_call3(Stdlib_format[125],ppf,_a_,_g_)}
    function pp_jv_error(ppf,e)
     {var _f_=js_to_string(e);return caml_call2(Stdlib_format[13],ppf,_f_)}
    var stdouts=[0,cst];
    function stdouts_reset(param){stdouts[1] = cst$0;return 0}
    function stdouts_append(d)
     {stdouts[1] = caml_call2(Stdlib[28],stdouts[1],d);return 0}
    var resp=caml_call1(Stdlib_buffer[1],100);
    function top_init(param)
     {caml_call2(Js_of_ocaml_Sys_js[1],Stdlib[39],stdouts_append);
      caml_call2(Js_of_ocaml_Sys_js[1],Stdlib[40],stdouts_append);
      caml_call1(Js_of_ocaml_toplevel_JsooTop[3],0);
      var ppf=caml_call1(Stdlib_format[109],resp);
      caml_call2
       (Js_of_ocaml_toplevel_JsooTop[1],ppf,cst_install_printer_Brr_poke_p);
      caml_call2
       (Js_of_ocaml_toplevel_JsooTop[1],ppf,cst_install_printer_Brr_poke_p$0);
      caml_call2
       (Js_of_ocaml_toplevel_JsooTop[1],ppf,cst_install_printer_Brr_poke_p$1);
      return 0}
    function top_eval(phrase)
     {var ppf=caml_call1(Stdlib_format[109],resp);
      stdouts_reset(0);
      var _d_=caml_string_of_jsstring(phrase);
      caml_call5(Js_of_ocaml_toplevel_JsooTop[2],1,0,0,ppf,_d_);
      var
       _e_=caml_call1(Stdlib_buffer[2],resp),
       r=caml_jsstring_of_string(caml_call2(Stdlib[28],stdouts[1],_e_));
      caml_call1(Stdlib_buffer[9],resp);
      stdouts_reset(0);
      return r}
    function top_use(phrases)
     {var ppf=caml_call1(Stdlib_format[109],resp);
      stdouts_reset(0);
      var _b_=caml_string_of_jsstring(phrases);
      caml_call2(Js_of_ocaml_toplevel_JsooTop[1],ppf,_b_);
      var
       _c_=caml_call1(Stdlib_buffer[2],resp),
       r=caml_jsstring_of_string(caml_call2(Stdlib[28],stdouts[1],_c_));
      stdouts_reset(0);
      caml_call1(Stdlib_buffer[9],resp);
      return r}
    function define(param)
     {var
       ocaml_version=caml_jsstring_of_string(Stdlib_sys[46]),
       o=
        {"version":0,
         "ocaml_version":ocaml_version,
         "jsoo_version":caml_jsstring_of_string(Js_of_ocaml_Sys_js[9]),
         "init":top_init,
         "eval":top_eval,
         "use":top_use};
      return Jv[12].ocaml_poke = o}
    var Brr_poke=[0,define,pp_jstr,pp_jv_error,pp_jv];
    runtime.caml_register_global(23,Brr_poke,"Brr_poke");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJicnJfcG9rZS5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzQ29udGVudCI6W119
