(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_js_eval_string=runtime.caml_js_eval_string,
     caml_ml_string_length=runtime.caml_ml_string_length,
     caml_register_global=runtime.caml_register_global,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_wrap_exception=runtime.caml_wrap_exception;
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
     cst_toplevel=caml_string_of_jsbytes("//toplevel//"),
     name=caml_string_of_jsbytes("/dev/fake_stdin"),
     cst=caml_string_of_jsbytes(""),
     cst$0=caml_string_of_jsbytes(""),
     cst_static_cmis=caml_string_of_jsbytes("/static/cmis"),
     cst_enable=caml_string_of_jsbytes("enable"),
     cst_disable=caml_string_of_jsbytes("disable"),
     cst_debug_on=caml_string_of_jsbytes("debug_on"),
     cst_debug_off=caml_string_of_jsbytes("debug_off"),
     cst_tc=caml_string_of_jsbytes("tc"),
     cst_tailcall=caml_string_of_jsbytes("tailcall"),
     Js_of_ocaml_compiler_Stdlib=global_data.Js_of_ocaml_compiler__Stdlib,
     Ast_mapper=global_data.Ast_mapper,
     Syntaxerr=global_data.Syntaxerr,
     Lexer=global_data.Lexer,
     Typecore=global_data.Typecore,
     Typetexp=global_data.Typetexp,
     Typeclass=global_data.Typeclass,
     Typemod=global_data.Typemod,
     Typedecl=global_data.Typedecl,
     Translcore=global_data.Translcore,
     Translclass=global_data.Translclass,
     Translmod=global_data.Translmod,
     Stdlib_sys=global_data.Stdlib__sys,
     CamlinternalLazy=global_data.CamlinternalLazy,
     Toploop=global_data.Toploop,
     Stdlib_lexing=global_data.Stdlib__lexing,
     Stdlib=global_data.Stdlib,
     Stdlib_format=global_data.Stdlib__format,
     Errors=global_data.Errors,
     Js_of_ocaml_Sys_js=global_data.Js_of_ocaml__Sys_js,
     Js_of_ocaml_compiler_Ocaml_com=
      global_data.Js_of_ocaml_compiler__Ocaml_compiler,
     Js_of_ocaml_Js=global_data.Js_of_ocaml__Js,
     Symtable=global_data.Symtable,
     Js_of_ocaml_compiler_Driver=global_data.Js_of_ocaml_compiler__Driver,
     Stdlib_buffer=global_data.Stdlib__buffer,
     Js_of_ocaml_compiler_Pretty_pr=
      global_data.Js_of_ocaml_compiler__Pretty_print,
     Topdirs=global_data.Topdirs,
     Js_of_ocaml_compiler_Config=global_data.Js_of_ocaml_compiler__Config,
     Stdlib_hashtbl=global_data.Stdlib__hashtbl,
     Js_of_ocaml_compiler_Debug=global_data.Js_of_ocaml_compiler__Debug,
     Js_of_ocaml_toplevel=[0];
    caml_register_global(17,Js_of_ocaml_toplevel,"Js_of_ocaml_toplevel__");
    var
     ppx_rewriters=[0,0],
     _c_=[0,[2,0,0],caml_string_of_jsbytes("%s")],
     _b_=
      [0,
       [11,
        caml_string_of_jsbytes("function "),
        [2,
         0,
         [11,
          caml_string_of_jsbytes('(){caml_failwith("'),
          [2,0,[11,caml_string_of_jsbytes(' not implemented")}'),0]]]]],
       caml_string_of_jsbytes
        ('function %s(){caml_failwith("%s not implemented")}')];
    function _a_(param,f){ppx_rewriters[1] = [0,f,ppx_rewriters[1]];return 0}
    Ast_mapper[5][1] = _a_;
    function preprocess_structure(str)
     {var _G_=ppx_rewriters[1];
      function _H_(ppx_rewriter,str)
       {var mapper=caml_call1(ppx_rewriter,0);
        return caml_call2(mapper[36],mapper,str)}
      return caml_call3(Js_of_ocaml_compiler_Stdlib[19][22],_H_,_G_,str)}
    function preprocess_signature(str)
     {var _E_=ppx_rewriters[1];
      function _F_(ppx_rewriter,str)
       {var mapper=caml_call1(ppx_rewriter,0);
        return caml_call2(mapper[34],mapper,str)}
      return caml_call3(Js_of_ocaml_compiler_Stdlib[19][22],_F_,_E_,str)}
    function preprocess_phrase(phrase)
     {if(0 === phrase[0])
       {var str=phrase[1];return [0,preprocess_structure(str)]}
      return phrase}
    var
     Js_of_ocaml_toplevel_JsooTopPp=
      [0,preprocess_structure,preprocess_signature,preprocess_phrase];
    caml_register_global
     (20,Js_of_ocaml_toplevel_JsooTopPp,"Js_of_ocaml_toplevel__JsooTopPpx");
    function loc(param)
     {if(param[1] === Syntaxerr[1])
       {var x=param[2];return [0,caml_call1(Syntaxerr[3],x)]}
      if(param[1] === Lexer[4])
       var loc=param[3];
      else
       if
        (param[1]
         ===
         Typecore[23]
         ||
         param[1]
         ===
         Typetexp[12]
         ||
         param[1]
         ===
         Typeclass[6]
         ||
         param[1]
         ===
         Typemod[15]
         ||
         param[1]
         ===
         Typedecl[13]
         ||
         param[1]
         ===
         Translcore[7]
         ||
         param[1]
         ===
         Translclass[2])
        var loc=param[2];
       else
        {if(param[1] !== Translmod[12])return 0;var loc=param[2]}
      return [0,loc]}
    var Js_of_ocaml_toplevel_JsooTopEr=[0,loc];
    caml_register_global
     (31,Js_of_ocaml_toplevel_JsooTopEr,"Js_of_ocaml_toplevel__JsooTopError");
    function split_primitives(p)
     {var len=caml_ml_string_length(p);
      function split(beg,cur)
       {var cur$0=cur;
        for(;;)
         {if(caml_call2(Js_of_ocaml_compiler_Stdlib[8],cur$0,len))return 0;
          if(0 === runtime.caml_string_get(p,cur$0))
           {var _D_=split(cur$0 + 1 | 0,cur$0 + 1 | 0);
            return [0,
                    caml_call3
                     (Js_of_ocaml_compiler_Stdlib[28][4],p,beg,cur$0 - beg | 0),
                    _D_]}
          var cur$1=cur$0 + 1 | 0,cur$0=cur$1;
          continue}}
      var _C_=split(0,0);
      return caml_call1(Js_of_ocaml_compiler_Stdlib[35][11],_C_)}
    var
     setup=
      [246,
       function(_n_)
        {caml_call1(Topdirs[2],cst_static_cmis);
         caml_call3
          (Stdlib_hashtbl[5],
           Toploop[7],
           cst_enable,
           [1,Js_of_ocaml_compiler_Config[1][24]]);
         caml_call3
          (Stdlib_hashtbl[5],
           Toploop[7],
           cst_disable,
           [1,Js_of_ocaml_compiler_Config[1][25]]);
         caml_call3
          (Stdlib_hashtbl[5],
           Toploop[7],
           cst_debug_on,
           [1,Js_of_ocaml_compiler_Debug[3]]);
         caml_call3
          (Stdlib_hashtbl[5],
           Toploop[7],
           cst_debug_off,
           [1,Js_of_ocaml_compiler_Debug[4]]);
         var _o_=[1,caml_call1(Js_of_ocaml_compiler_Config[2][1],cst_tc)];
         caml_call3(Stdlib_hashtbl[5],Toploop[7],cst_tailcall,_o_);
         var
          initial_primitive_count=
           split_primitives(caml_call1(Symtable[9],0)).length - 1;
         function compile(s)
          {var
            _r_=Js_of_ocaml_compiler_Stdlib[27][6],
            _s_=caml_call1(Js_of_ocaml_compiler_Stdlib[35][10],s),
            _t_=caml_call2(Js_of_ocaml_compiler_Stdlib[19][60],_s_,_r_),
            s$0=caml_call2(Js_of_ocaml_compiler_Stdlib[28][7],cst,_t_),
            prims=split_primitives(caml_call1(Symtable[9],0));
           function unbound_primitive(p)
            {try
              {caml_js_eval_string(p);var _A_=0;return _A_}
             catch(_B_){return 1}}
           var stubs=[0,0];
           function _u_(i,p)
            {var
              _w_=
               caml_call2
                (Js_of_ocaml_compiler_Stdlib[8],i,initial_primitive_count),
              _x_=_w_?unbound_primitive(p):_w_;
             if(_x_)
              {var _y_=stubs[1];
               stubs[1] = [0,caml_call3(Stdlib_format[128],_b_,p,p),_y_];
               var _z_=0}
             else
              var _z_=_x_;
             return _z_}
           caml_call2(Js_of_ocaml_compiler_Stdlib[35][14],_u_,prims);
           var
            output_program=
             caml_call2(Js_of_ocaml_compiler_Driver[2],prims,s$0),
            b=caml_call1(Stdlib_buffer[1],100);
           caml_call1
            (output_program,caml_call1(Js_of_ocaml_compiler_Pretty_pr[11],b));
           caml_call2(Stdlib_format[36],Stdlib_format[107],0);
           caml_call2(Stdlib_format[36],Stdlib_format[108],0);
           caml_call1(Stdlib[63],Stdlib[39]);
           caml_call1(Stdlib[63],Stdlib[40]);
           var
            res=caml_call1(Stdlib_buffer[2],b),
            _v_=caml_call2(Js_of_ocaml_compiler_Stdlib[28][7],cst$0,stubs[1]),
            t0=caml_call2(Stdlib[28],_v_,res);
           return Js_of_ocaml_Js[50][1].toplevelEval(t0)}
         Js_of_ocaml_Js[50][1].toplevelCompile = compile;
         function _p_(x)
          {var f=caml_js_eval_string(x);
           return function(param)
            {var res=caml_call1(f,Js_of_ocaml_Js[50][1]);
             caml_call2(Stdlib_format[36],Stdlib_format[107],0);
             caml_call2(Stdlib_format[36],Stdlib_format[108],0);
             caml_call1(Stdlib[63],Stdlib[39]);
             caml_call1(Stdlib[63],Stdlib[40]);
             return res}}
         Js_of_ocaml_Js[50][1].toplevelEval = _p_;
         function _q_(name)
          {var name$0=runtime.caml_string_of_jsstring(name);
           return caml_call1(Js_of_ocaml_compiler_Ocaml_com[3][2],name$0)}
         Js_of_ocaml_Js[50][1].toplevelReloc = _q_;
         return 0}];
    function refill_lexbuf(s,p,ppf,buffer,len)
     {if
       (caml_call2
         (Js_of_ocaml_compiler_Stdlib[6],p[1],caml_ml_string_length(s)))
       return 0;
      try
       {var
         _k_=p[1],
         nl$0=0,
         _l_=
          (caml_call3(Js_of_ocaml_compiler_Stdlib[28][18],s,p[1],10)
           -
           _k_
           |
           0)
          +
          1
          |
          0,
         nl=nl$0,
         len$1=_l_}
      catch(_m_)
       {var len$0=caml_ml_string_length(s) - p[1] | 0,nl=1,len$1=len$0}
      var len$2=caml_call2(Js_of_ocaml_compiler_Stdlib[12],len,len$1);
      caml_call5(Js_of_ocaml_compiler_Stdlib[28][6],s,p[1],buffer,0,len$2);
      if(ppf)
       {var
         ppf$0=ppf[1],
         _j_=caml_call3(Js_of_ocaml_compiler_Stdlib[27][74],buffer,0,len$2);
        caml_call3(Stdlib_format[125],ppf$0,_c_,_j_);
        if(nl)caml_call2(Stdlib_format[38],ppf$0,0);
        caml_call2(Stdlib_format[36],ppf$0,0)}
      p[1] = p[1] + len$2 | 0;
      return len$2}
    function use(ffp,content)
     {if(runtime.caml_sys_file_exists(name))runtime.caml_sys_remove(name);
      caml_call2(Js_of_ocaml_Sys_js[7],name,content);
      return caml_call2(Toploop[16],ffp,name)}
    function execute(printval,pp_code,highlight_location,pp_answer,s)
     {var _e_=[0,0];
      function _f_(_h_,_i_){return refill_lexbuf(s,_e_,pp_code,_h_,_i_)}
      var lb=caml_call2(Stdlib_lexing[4],0,_f_);
      try
       {for(;;)
         {try
           {var
             phr=caml_call1(Toploop[31][1],lb),
             phr$0=preprocess_phrase(phr);
            caml_call3(Toploop[12],printval,pp_answer,phr$0)}
          catch(x$0)
           {x$0 = caml_wrap_exception(x$0);
            if(x$0 === Stdlib[12])throw Stdlib[12];
            if(highlight_location)
             {var f=highlight_location[1],match=loc(x$0);
              if(match){var loc$0=match[1];caml_call1(f,loc$0)}}
            caml_call2(Errors[1],Stdlib_format[108],x$0);
            continue;
            var x=x$0}
          continue}}
      catch(_g_)
       {_g_ = caml_wrap_exception(_g_);
        if(_g_ === Stdlib[12])return caml_call1(Stdlib[64],0);
        throw _g_}}
    function initialize(param)
     {Stdlib_sys[3][1] = 0;
      var _d_=runtime.caml_obj_tag(setup);
      if(250 !== _d_ && 246 === _d_)caml_call1(CamlinternalLazy[2],setup);
      caml_call1(Toploop[10],0);
      Toploop[36][1] = cst_toplevel;
      Stdlib_sys[3][1] = 1;
      return 0}
    var Js_of_ocaml_toplevel_JsooTop=[0,use,execute,initialize];
    caml_register_global
     (50,Js_of_ocaml_toplevel_JsooTop,"Js_of_ocaml_toplevel__JsooTop");
    var Js_of_ocaml_toplevel$0=[0];
    caml_register_global(51,Js_of_ocaml_toplevel$0,"Js_of_ocaml_toplevel");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJqc19vZl9vY2FtbF90b3BsZXZlbC5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzQ29udGVudCI6W119
