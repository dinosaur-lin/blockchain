(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_equal=runtime.caml_equal,
     caml_jsstring_of_string=runtime.caml_jsstring_of_string,
     caml_register_global=runtime.caml_register_global,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    function caml_call4(f,a0,a1,a2,a3)
     {return f.length == 4
              ?f(a0,a1,a2,a3)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3])}
    function caml_call6(f,a0,a1,a2,a3,a4,a5)
     {return f.length == 6
              ?f(a0,a1,a2,a3,a4,a5)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_length$0=caml_string_of_jsbytes("length"),
     cst_length$1=caml_string_of_jsbytes("length"),
     cst_brr_add$0=caml_string_of_jsbytes("brr_add"),
     cst_length$2=caml_string_of_jsbytes("length"),
     cst_brr_rem$0=caml_string_of_jsbytes("brr_rem"),
     cst=caml_string_of_jsbytes("*"),
     cst_length=caml_string_of_jsbytes("length"),
     cst_brr_add=caml_string_of_jsbytes("brr_add"),
     cst_brr_rem=caml_string_of_jsbytes("brr_rem"),
     cst$0=caml_string_of_jsbytes(","),
     cst_s=caml_string_of_jsbytes("\xce\xbcs"),
     cst_keyCode=caml_string_of_jsbytes("keyCode"),
     cst_key_unbound=caml_string_of_jsbytes("key unbound"),
     cst$1=caml_string_of_jsbytes(""),
     Note=global_data.Note,
     Brr=global_data.Brr,
     Jv=global_data.Jv,
     Stdlib_list=global_data.Stdlib__list,
     Jstr=global_data.Jstr,
     Assert_failure=global_data.Assert_failure,
     Fut=global_data.Fut,
     Stdlib=global_data.Stdlib,
     Stdlib_string=global_data.Stdlib__string,
     Stdlib_option=global_data.Stdlib__option,
     Stdlib_hashtbl=global_data.Stdlib__hashtbl,
     Stdlib_char=global_data.Stdlib__char,
     Brr_io=global_data.Brr_io,
     _a_=[0,caml_string_of_jsbytes("src/note/brr_note.ml"),23,16],
     _b_=[0,1],
     _H_=[0,caml_string_of_jsbytes("src/note/brr_note_kit.ml"),785,24],
     _G_=[0,0],
     _B_=[0,caml_string_of_jsbytes("src/note/brr_note_kit.ml"),438,15],
     _x_=[0,0.,0.],
     _p_=[0,3256585,847852583],
     _q_=[0,3256585,-57574468],
     _r_=[0,748795083,847852583],
     _s_=[0,748795083,-57574468],
     _t_=[0,858945253,847852583],
     _u_=[0,858945253,-57574468],
     _v_=[0,256924770,847852583],
     _w_=[0,256924770,-57574468],
     _f_=[0,858945253,-57574468],
     _g_=[0,256924770,847852583],
     _h_=[0,748795083,847852583],
     _i_=[0,3256585,847852583],
     _j_=[0,892012143,19067],
     _k_=[0,892012143,759637122],
     _l_=[0,951904681,847852583],
     _m_=[0,951904681,19067],
     _n_=[0,951904681,-57574468],
     _o_=[0,951904681,759637122],
     _e_=[0,858945253,847852583],
     _I_=runtime.caml_int64_create_lo_mi_hi(1,0,0);
    function to_event(f)
     {var match=caml_call1(Note[3][3],0),send_e=match[2],e=match[1];
      function send_e$0(v)
       {function _dL_(param){return caml_call2(send_e,0,v)}
        caml_call2(Brr[16][8],0,_dL_);
        return 0}
      caml_call2(Fut[2],f,send_e$0);
      return e}
    function of_event(e)
     {var match=caml_call1(Fut[1],0),set_fut=match[2],fut=match[1],logr=[0,0];
      function set_fut$0(v)
       {function _dJ_(param)
         {var _dK_=logr[1];
          if(_dK_)
           {var logr$0=_dK_[1];
            caml_call1(Note[2][6],logr$0);
            return caml_call1(set_fut,v)}
          throw [0,Assert_failure,_a_]}
        caml_call2(Brr[16][8],0,_dJ_);
        return 0}
      var s=caml_call3(Note[3][2],_b_,e,set_fut$0);
      return s?(logr[1] = s,[0,fut]):0}
    var Futr=[0,to_event,of_event];
    function tick(param){return [0,"tick",0]}
    function log_value(opt,_dH_,id,x)
     {if(opt)var sth=opt[1],l=sth;else var l=Brr[12][14];
      if(_dH_)
       var sth$0=_dH_[1],v=sth$0;
      else
       var v=function(v){return [0,v,0]};
      var _dI_=caml_call1(v,x);
      caml_call1
       (l,[0,caml_call2(Jstr[8],caml_jsstring_of_string(id),":"),_dI_]);
      return x}
    function log(opt,l,v,id,e)
     {if(opt)var sth=opt[1],obs=sth;else var obs=0;
      if(obs)
       {var
         _dD_=function(ev){log_value(l,v,id,ev);return 0},
         _dE_=caml_call3(Note[3][2],0,e,_dD_);
        caml_call1(Note[2][8],_dE_);
        return e}
      function _dF_(_dG_){return log_value(l,v,id,_dG_)}
      return caml_call2(Note[3][9],_dF_,e)}
    var E=[0,log];
    function log$0(opt,l,v,id,s)
     {if(opt)var sth=opt[1],obs=sth;else var obs=0;
      if(obs)
       {var
         _dy_=function(sv){log_value(l,v,id,sv);return 0},
         _dz_=caml_call3(Note[4][2],0,s,_dy_);
        caml_call1(Note[2][7],_dz_);
        return s}
      function _dA_(_dC_){return log_value(l,v,id,_dC_)}
      var _dB_=[0,caml_call1(Note[4][4],s)];
      return caml_call3(Note[4][14],_dB_,_dA_,s)}
    var S=[0,log$0],Consoler=[0,tick,log_value,E,S];
    function instruct(opt,_dx_,e)
     {if(opt)var sth=opt[1],propagate=sth;else var propagate=1;
      if(_dx_)var sth$0=_dx_[1],default$0=sth$0;else var default$0=1;
      if(! default$0)caml_call1(Brr[7][13],e);
      return propagate?0:caml_call1(Brr[7][10],e)}
    function endless_listen(opt,propagate,default$0,t,type,f)
     {if(opt)var sth=opt[1],capture=sth;else var capture=0;
      var opts=capture?[0,caml_call4(Brr[7][19],[0,capture],0,0,0)]:0;
      function f$0(ev)
       {instruct(propagate,default$0,ev);return caml_call1(f,ev)}
      return caml_call4(Brr[7][20],opts,type,f$0,t)}
    function on_target(opt,propagate,default$0,type,f,t)
     {if(opt)var sth=opt[1],capture=sth;else var capture=0;
      var
       opts=capture?[0,caml_call4(Brr[7][19],[0,capture],0,0,0)]:0,
       match=caml_call1(Note[3][3],0),
       send_e=match[2],
       e=match[1];
      function f$0(ev)
       {instruct(propagate,default$0,ev);
        return caml_call2(send_e,0,caml_call1(f,ev))}
      caml_call4(Brr[7][20],opts,type,f$0,t);
      return e}
    function on_targets(opt,propagate,default$0,type,f,ts)
     {if(opt)var sth=opt[1],capture=sth;else var capture=0;
      var
       opts=capture?[0,caml_call4(Brr[7][19],[0,capture],0,0,0)]:0,
       match=caml_call1(Note[3][3],0),
       send_e=match[2],
       e=match[1];
      function f$0(ev)
       {instruct(propagate,default$0,ev);
        return caml_call2(send_e,0,caml_call2(f,caml_call1(Brr[7][5],ev),ev))}
      var _dw_=caml_call3(Brr[7][20],opts,type,f$0);
      caml_call2(Stdlib_list[15],_dw_,ts);
      return e}
    function on_el(capture,propagate,default$0,type,f,el)
     {return on_target(capture,propagate,default$0,type,f,el)}
    function on_els(opt,propagate,default$0,type,f,els)
     {if(opt)var sth=opt[1],capture=sth;else var capture=0;
      var
       opts=capture?[0,caml_call4(Brr[7][19],[0,capture],0,0,0)]:0,
       match=caml_call1(Note[3][3],0),
       send_e=match[2],
       e=match[1];
      function f$0(ev)
       {instruct(propagate,default$0,ev);
        return caml_call2(send_e,0,caml_call2(f,caml_call1(Brr[7][5],ev),ev))}
      function _dv_(el){return caml_call4(Brr[7][20],opts,type,f$0,el)}
      caml_call2(Stdlib_list[15],_dv_,els);
      return e}
    function unit(e){return 0}
    function stamp(v,e){return v}
    function listen(opt,propagate,default$0,t,type,f)
     {if(opt)var sth=opt[1],capture=sth;else var capture=0;
      var opts=capture?[0,caml_call4(Brr[7][19],[0,capture],0,0,0)]:0;
      function f$0(ev)
       {instruct(propagate,default$0,ev);return caml_call1(f,ev)}
      caml_call4(Brr[7][20],opts,type,f$0,t);
      return function(param){return caml_call4(Brr[7][21],opts,type,f$0,t)}}
    function add_xxx_fun(xxx,f,e)
     {var fs=e[xxx],fs$0=caml_call1(Jv[7],fs)?[0,f,0]:[0,f,fs];
      return e[xxx] = fs$0}
    function add_rem_fun(_dt_,_du_){return add_xxx_fun(cst_brr_rem,_dt_,_du_)}
    function invoke_funs(xxx,node)
     {var star=caml_call1(Jv[23],cst);
      if(caml_call1(Brr[9][7],node))
       {var
         invoke_node_funs=
          function(n)
           {var funs=n[xxx];
            function _ds_(f){return caml_call1(f,0)}
            caml_call2(Stdlib_list[15],_ds_,funs);
            return n[xxx] = 0},
         ns=node.querySelectorAll(star),
         _dq_=caml_call2(Jv[20][2],ns,cst_length) - 1 | 0,
         _dp_=0;
        if(! (_dq_ < 0))
         {var i=_dp_;
          for(;;)
           {var n=ns.item(i);
            invoke_node_funs(n);
            var _dr_=i + 1 | 0;
            if(_dq_ !== i){var i=_dr_;continue}
            break}}
        return invoke_node_funs(node)}
      return 0}
    function obs(records,obs)
     {function in_html_dom(n)
       {var _do_=Brr[16][2];return n.getRootNode() === _do_?1:0}
      var _dg_=caml_call2(Jv[20][2],records,cst_length$0) - 1 | 0,_df_=0;
      if(! (_dg_ < 0))
       {var i=_df_;
        for(;;)
         {var
           r=records[i],
           adds=r.addedNodes,
           _di_=caml_call2(Jv[20][2],adds,cst_length$1) - 1 | 0,
           _dh_=0;
          if(! (_di_ < 0))
           {var i$1=_dh_;
            for(;;)
             {var n$0=adds.item(i$1);
              if(in_html_dom(n$0))invoke_funs(cst_brr_add$0,n$0);
              var _dn_=i$1 + 1 | 0;
              if(_di_ !== i$1){var i$1=_dn_;continue}
              break}}
          var
           rems=r.removedNodes,
           _dk_=caml_call2(Jv[20][2],rems,cst_length$2) - 1 | 0,
           _dj_=0;
          if(! (_dk_ < 0))
           {var i$0=_dj_;
            for(;;)
             {var n=rems.item(i$0);
              if(1 - in_html_dom(n))invoke_funs(cst_brr_rem$0,n);
              var _dm_=i$0 + 1 | 0;
              if(_dk_ !== i$0){var i$0=_dm_;continue}
              break}}
          var _dl_=i + 1 | 0;
          if(_dg_ !== i){var i=_dl_;continue}
          break}}
      return 0}
    var
     mutation_observer=Jv[12].MutationObserver,
     obs$0=new mutation_observer(obs),
     opts={"childList":Jv[17],"subtree":Jv[17]},
     root=caml_call1(Brr[10][4],Brr[16][2]);
    obs$0.observe(root,opts);
    function add_logr(e,l)
     {return add_rem_fun(function(param){return caml_call1(Note[2][6],l)},e)}
    function may_add_logr(e,param)
     {if(param){var l=param[1];return add_logr(e,l)}return 0}
    function set_children(e,on)
     {var _de_=caml_call1(Brr[9][15],e);
      return may_add_logr(e,caml_call3(Note[3][2],0,on,_de_))}
    function def_children(e,cs)
     {var _dd_=caml_call1(Brr[9][15],e);
      return add_logr(e,caml_call3(Note[4][2],0,cs,_dd_))}
    function set_at(a,on,e)
     {function _dc_(v){return caml_call3(Brr[9][21],a,v,e)}
      return may_add_logr(e,caml_call3(Note[3][2],0,on,_dc_))}
    function def_at(a,vs,e)
     {function _db_(v){return caml_call3(Brr[9][21],a,v,e)}
      return add_logr(e,caml_call3(Note[4][2],0,vs,_db_))}
    function set_class(c,on,e)
     {function _da_(v){return caml_call3(Brr[9][26],c,v,e)}
      return may_add_logr(e,caml_call3(Note[3][2],0,on,_da_))}
    function def_class(c,bs,e)
     {function _c$_(v){return caml_call3(Brr[9][26],c,v,e)}
      return add_logr(e,caml_call3(Note[4][2],0,bs,_c$_))}
    function set_prop(p,on,e)
     {function _c__(v){return caml_call3(Brr[9][24],p,v,e)}
      return may_add_logr(e,caml_call3(Note[3][2],0,on,_c__))}
    function def_prop(p,vs,e)
     {function _c9_(v){return caml_call3(Brr[9][24],p,v,e)}
      return add_logr(e,caml_call3(Note[4][2],0,vs,_c9_))}
    function set_inline_style(important,p,on,e)
     {function _c8_(v){return caml_call4(Brr[9][30],important,p,v,e)}
      return may_add_logr(e,caml_call3(Note[3][2],0,on,_c8_))}
    function def_inline_style(important,p,vs,e)
     {function _c7_(v){return caml_call4(Brr[9][30],important,p,v,e)}
      return add_logr(e,caml_call3(Note[4][2],0,vs,_c7_))}
    function set_has_focus(on,e)
     {function _c6_(v){return caml_call2(Brr[9][45],v,e)}
      return may_add_logr(e,caml_call3(Note[3][2],0,on,_c6_))}
    function def_has_focus(b,e)
     {function _c5_(v){return caml_call2(Brr[9][45],v,e)}
      return add_logr(e,caml_call3(Note[4][2],0,b,_c5_))}
    function on_add(f,e){return add_xxx_fun(cst_brr_add,f,e)}
    function on_rem(f,e){return add_rem_fun(f,e)}
    function call(f,on,e)
     {function _c4_(v){return caml_call2(f,v,e)}
      return may_add_logr(e,caml_call3(Note[3][2],0,on,_c4_))}
    function hold_logr(e,l){return add_logr(e,l)}
    function may_hold_logr(e,l){return may_add_logr(e,l)}
    var
     _c_=
      [0,
       set_children,
       def_children,
       set_at,
       def_at,
       set_prop,
       def_prop,
       set_class,
       def_class,
       set_inline_style,
       def_inline_style,
       set_has_focus,
       def_has_focus,
       on_add,
       on_rem,
       call,
       hold_logr,
       may_hold_logr],
     _d_=
      [0,
       on_target,
       on_targets,
       on_el,
       on_els,
       unit,
       stamp,
       instruct,
       listen,
       endless_listen],
     Brr_note=[0,Futr,Consoler,_d_,_c_];
    caml_register_global(200,Brr_note,"Brr_note");
    function of_ev(e)
     {var c=caml_call2(Jv[20][2],e,cst_keyCode);
      if(48 <= c && ! (57 < c))
       return [0,962246961,caml_call1(Stdlib_char[1],c)];
      if(65 <= c && ! (90 < c))
       return [0,962246961,caml_call1(Stdlib_char[1],c + 32 | 0)];
      if(96 <= c && ! (105 < c))
       return [0,962246961,caml_call1(Stdlib_char[1],(c - 96 | 0) + 48 | 0)];
      if(112 <= c && ! (135 < c))return [0,782112612,c - 111 | 0];
      if(91 <= c)
       {var switch$0=0;
        if(224 === c)
         switch$0 = 1;
        else
         if(! (94 <= c))
          {var switcher=c - 91 | 0;
           switch(switcher)
            {case 0:switch$0 = 1;break;case 1:break;default:return _f_}}
        if(switch$0)return _e_}
      else
       {var switcher$0=c - 8 | 0;
        if(! (37 < switcher$0 >>> 0))
         switch(switcher$0)
          {case 0:return -323132129;
           case 1:return 4198965;
           case 5:return 1036130512;
           case 8:return _g_;
           case 9:return _h_;
           case 10:return _i_;
           case 19:return 258914209;
           case 24:return -921329427;
           case 25:return _j_;
           case 26:return _k_;
           case 27:return 3455931;
           case 28:return 803993151;
           case 29:return _l_;
           case 30:return _m_;
           case 31:return _n_;
           case 32:return _o_;
           case 37:return 62119160
           }}
      return [0,3752319,c]}
    function equal(k0,k1){return caml_equal(k0,k1)}
    function compare(k0,k1){return runtime.caml_compare(k0,k1)}
    function dir_to_jstr(param)
     {return 759637122 <= param
              ?847852583 <= param?"left":"down"
              :19067 <= param?"up":"right"}
    function to_jstr(param)
     {if(typeof param === "number")
       return 4198965 <= param
               ?62119160 === param
                 ?"enter"
                 :803993151 <= param
                   ?1036130512 <= param?"return":"home"
                   :258914209 <= param?"escape":"tab"
               :-323132129 <= param
                 ?3455931 <= param?"end":"backspace"
                 :-764299431 <= param?"insert":"spacebar";
      var _cU_=param[1];
      if(782112612 <= _cU_)
       {if(858945253 === _cU_)
         {var dir=param[2],_cV_=dir_to_jstr(dir);
          return caml_call2(Jstr[8],"meta_",_cV_)}
        if(951904681 <= _cU_)
         {if(962246961 <= _cU_)
           {var c=param[2],_cW_=caml_call1(Jstr[31],c);
            return caml_call2(Jstr[8],"key_",_cW_)}
          var dir$0=param[2],_cX_=dir_to_jstr(dir$0);
          return caml_call2(Jstr[8],"arrow_",_cX_)}
        if(892012143 <= _cU_)
         {var dir$1=param[2],_cY_=dir_to_jstr(dir$1);
          return caml_call2(Jstr[8],"page_",_cY_)}
        var n=param[2],_cZ_=caml_call2(Jstr[33],0,n);
        return caml_call2(Jstr[8],"F",_cZ_)}
      if(256924770 <= _cU_)
       {if(748795083 <= _cU_)
         {var dir$2=param[2],_c0_=dir_to_jstr(dir$2);
          return caml_call2(Jstr[8],"ctrl_",_c0_)}
        var dir$3=param[2],_c1_=dir_to_jstr(dir$3);
        return caml_call2(Jstr[8],"shift_",_c1_)}
      if(3752319 <= _cU_)
       {var c$0=param[2],_c2_=caml_call2(Jstr[33],0,c$0);
        return caml_call2(Jstr[8],"key_",_c2_)}
      var dir$4=param[2],_c3_=dir_to_jstr(dir$4);
      return caml_call2(Jstr[8],"alt_",_c3_)}
    function def_event(event,k)
     {try
       {var _cS_=caml_call2(Stdlib_hashtbl[6],event,k)[1];return _cS_}
      catch(_cT_)
       {_cT_ = caml_wrap_exception(_cT_);
        if(_cT_ === Stdlib[8])
         {var d=caml_call1(Note[3][3],0);
          caml_call3(Stdlib_hashtbl[5],event,k,d);
          return d[1]}
        throw _cT_}}
    function send_event(step,event,k)
     {try
       {var _cQ_=caml_call2(caml_call2(Stdlib_hashtbl[6],event,k)[2],step,0);
        return _cQ_}
      catch(_cR_)
       {_cR_ = caml_wrap_exception(_cR_);
        if(_cR_ === Stdlib[8])return 0;
        throw _cR_}}
    function def_holds(holds,k)
     {try
       {var _cO_=caml_call2(Stdlib_hashtbl[6],holds,k)[1];return _cO_}
      catch(_cP_)
       {_cP_ = caml_wrap_exception(_cP_);
        if(_cP_ === Stdlib[8])
         {var d=caml_call2(Note[4][3],0,0);
          caml_call3(Stdlib_hashtbl[5],holds,k,d);
          return d[1]}
        throw _cP_}}
    function set_holds(step,holds,k,v)
     {try
       {var _cM_=caml_call2(caml_call2(Stdlib_hashtbl[6],holds,k)[2],step,v);
        return _cM_}
      catch(_cN_)
       {_cN_ = caml_wrap_exception(_cN_);
        if(_cN_ === Stdlib[8])return 0;
        throw _cN_}}
    function on_target$0(capture,propagate,default$0,t)
     {var
       match=caml_call1(Note[3][3],0),
       send_any_down=match[2],
       any_down=match[1],
       match$0=caml_call1(Note[3][3],0),
       send_any_up=match$0[2],
       any_up=match$0[1],
       match$1=caml_call2(Note[4][3],0,0),
       set_any_holds=match$1[2],
       any_holds=match$1[1],
       down_event=caml_call2(Stdlib_hashtbl[1],0,47),
       up_event=caml_call2(Stdlib_hashtbl[1],0,47),
       holds=caml_call2(Stdlib_hashtbl[1],0,47),
       lalt=caml_call2(Note[4][3],0,0),
       ralt=caml_call2(Note[4][3],0,0),
       alt=caml_call2(Note[4][28][5],lalt[1],ralt[1]),
       lctrl=caml_call2(Note[4][3],0,0),
       rctrl=caml_call2(Note[4][3],0,0),
       ctrl=caml_call2(Note[4][28][5],lctrl[1],rctrl[1]),
       lmeta=caml_call2(Note[4][3],0,0),
       rmeta=caml_call2(Note[4][3],0,0),
       meta=caml_call2(Note[4][28][5],lmeta[1],rmeta[1]),
       lshift=caml_call2(Note[4][3],0,0),
       rshift=caml_call2(Note[4][3],0,0),
       shift=caml_call2(Note[4][28][5],lshift[1],rshift[1]);
      caml_call3(Stdlib_hashtbl[5],holds,_p_,lalt);
      caml_call3(Stdlib_hashtbl[5],holds,_q_,ralt);
      caml_call3(Stdlib_hashtbl[5],holds,_r_,lctrl);
      caml_call3(Stdlib_hashtbl[5],holds,_s_,rctrl);
      caml_call3(Stdlib_hashtbl[5],holds,_t_,lmeta);
      caml_call3(Stdlib_hashtbl[5],holds,_u_,rmeta);
      caml_call3(Stdlib_hashtbl[5],holds,_v_,lshift);
      caml_call3(Stdlib_hashtbl[5],holds,_w_,rshift);
      var
       evs=
        [0,
         any_down,
         send_any_down,
         any_up,
         send_any_up,
         0,
         any_holds,
         set_any_holds,
         down_event,
         up_event,
         holds,
         alt,
         ctrl,
         meta,
         shift];
      function _cK_(e)
       {if(caml_call1(Brr[7][31][5],e))return 0;
        var step=caml_call1(Note[1][1],0),k=of_ev(e);
        evs[5] = evs[5] + 1 | 0;
        caml_call2(evs[2],[0,step],k);
        caml_call2(evs[7],[0,step],1);
        send_event([0,step],evs[8],k);
        set_holds([0,step],evs[10],k,1);
        return caml_call1(Note[1][2],step)}
      caml_call6(_d_[9],capture,propagate,default$0,t,Brr[7][76],_cK_);
      function _cL_(e)
       {var step=caml_call1(Note[1][1],0),k=of_ev(e);
        evs[5] = evs[5] - 1 | 0;
        caml_call2(evs[4],[0,step],k);
        if(evs[5] <= 0){evs[5] = 0;caml_call2(evs[7],[0,step],0)}
        send_event([0,step],evs[9],k);
        set_holds([0,step],evs[10],k,0);
        return caml_call1(Note[1][2],step)}
      caml_call6(_d_[9],capture,propagate,default$0,t,Brr[7][77],_cL_);
      return evs}
    function on_el$0(capture,propagate,default$0,t)
     {return on_target$0(capture,propagate,default$0,t)}
    function any_down(evs){return evs[1]}
    function any_up(evs){return evs[3]}
    function any_holds(evs){return evs[6]}
    function down(evs,k){return def_event(evs[8],k)}
    function up(evs,k){return def_event(evs[9],k)}
    function holds(evs,k){return def_holds(evs[10],k)}
    function alt(evs){return evs[11]}
    function ctrl(evs){return evs[12]}
    function meta(evs){return evs[13]}
    function shift(evs){return evs[14]}
    function warn_but(param)
     {return caml_call1(Brr[12][12],[0,"unexpected e.which",0])}
    function pt(x,y){return [0,x,y]}
    function destroy(evs)
     {var _cI_=evs[5];
      function _cJ_(f){return caml_call1(f,0)}
      return caml_call2(Stdlib_list[15],_cJ_,_cI_)}
    function set_mouse_pos(step,evs,e)
     {var
       t=evs[1],
       _cF_=caml_call1(Brr[9][35],t),
       x=caml_call1(Brr[7][32][4],e) - _cF_,
       _cG_=caml_call1(Brr[9][36],t),
       y=caml_call1(Brr[7][32][5],e) - _cG_;
      if(evs[2])
       var
        nx=x / caml_call1(Brr[9][37],t),
        ny=1. - y / caml_call1(Brr[9][38],t),
        l=[0,nx,ny];
      else
       var l=[0,x,y];
      var
       y$0=l[2],
       x$0=l[1],
       epos=caml_call2(evs[3],x$0,y$0),
       dx=x$0 - evs[4][1],
       dy=y$0 - evs[4][2],
       _cH_=caml_call2(evs[3],dx,dy);
      caml_call2(evs[9],[0,step],_cH_);
      caml_call2(evs[7],[0,step],epos);
      evs[4] = l;
      return epos}
    function mem_cb(mem,evs,e)
     {var step=caml_call1(Note[1][1],0);
      set_mouse_pos(step,evs,e);
      caml_call2(evs[11],[0,step],mem);
      return caml_call1(Note[1][2],step)}
    function up_cb(evs,e)
     {var
       step=caml_call1(Note[1][1],0),
       epos=set_mouse_pos(step,evs,e),
       match=caml_call1(Brr[7][32][12],e);
      if(2 < match >>> 0)
       {warn_but(0);var send_up=evs[17],set=evs[13]}
      else
       switch(match)
        {case 0:var send_up=evs[17],set=evs[13];break;
         case 1:var send_up=evs[23],set=evs[19];break;
         default:var send_up=evs[29],set=evs[25]}
      caml_call2(set,[0,step],0);
      caml_call2(send_up,[0,step],epos);
      return caml_call1(Note[1][2],step)}
    function on_target$1(capture,propagate,default$0,opt,pt,t)
     {if(opt)var sth=opt[1],normalize=sth;else var normalize=1;
      var
       _cm_=caml_call2(pt,0.,0.),
       match=caml_call2(Note[4][3],0,_cm_),
       set_pos=match[2],
       pos=match[1],
       match$0=caml_call1(Note[3][3],0),
       send_dpos=match$0[2],
       dpos=match$0[1],
       match$1=caml_call2(Note[4][3],0,0),
       set_mem=match$1[2],
       mem=match$1[1],
       match$2=caml_call2(Note[4][3],0,0),
       set_left=match$2[2],
       left=match$2[1],
       match$3=caml_call1(Note[3][3],0),
       send_left_down=match$3[2],
       left_down=match$3[1],
       match$4=caml_call1(Note[3][3],0),
       send_left_up=match$4[2],
       left_up=match$4[1],
       match$5=caml_call2(Note[4][3],0,0),
       set_mid=match$5[2],
       mid=match$5[1],
       match$6=caml_call1(Note[3][3],0),
       send_mid_down=match$6[2],
       mid_down=match$6[1],
       match$7=caml_call1(Note[3][3],0),
       send_mid_up=match$7[2],
       mid_up=match$7[1],
       match$8=caml_call2(Note[4][3],0,0),
       set_right=match$8[2],
       right=match$8[1],
       match$9=caml_call1(Note[3][3],0),
       send_right_down=match$9[2],
       right_down=match$9[1],
       match$10=caml_call1(Note[3][3],0),
       send_right_up=match$10[2],
       right_up=match$10[1],
       evs=
        [0,
         t,
         normalize,
         pt,
         _x_,
         0,
         pos,
         set_pos,
         dpos,
         send_dpos,
         mem,
         set_mem,
         left,
         set_left,
         left_down,
         send_left_down,
         left_up,
         send_left_up,
         mid,
         set_mid,
         mid_down,
         send_mid_down,
         mid_up,
         send_mid_up,
         right,
         set_right,
         right_down,
         send_right_down,
         right_up,
         send_right_up],
       l=_d_[8],
       _cn_=0;
      function _co_(e)
       {if(! caml_call1(Note[4][7],evs[10]))
         {var switch$0=0;
          if
           (!
            caml_call1(Note[4][7],evs[12])
            &&
            !
            caml_call1(Note[4][7],evs[18])
            &&
            !
            caml_call1(Note[4][7],evs[24]))
           switch$0 = 1;
          if(! switch$0)return up_cb(evs,e)}
        return 0}
      var
       _cp_=Brr[7][90],
       _cq_=
        [0,
         caml_call6
          (l,
           capture,
           propagate,
           default$0,
           caml_call1(Brr[10][1],Brr[16][2]),
           _cp_,
           _co_),
         _cn_],
       _cr_=0;
      function _cs_(_cE_){return mem_cb(_cr_,evs,_cE_)}
      var
       _ct_=
        [0,
         caml_call6(l,capture,propagate,default$0,evs[1],Brr[7][86],_cs_),
         _cq_],
       _cu_=1;
      function _cv_(_cD_){return mem_cb(_cu_,evs,_cD_)}
      var
       _cw_=
        [0,
         caml_call6(l,capture,propagate,default$0,evs[1],Brr[7][85],_cv_),
         _ct_];
      function _cx_(e)
       {var step=caml_call1(Note[1][1],0);
        set_mouse_pos(step,evs,e);
        return caml_call1(Note[1][2],step)}
      var
       _cy_=
        [0,
         caml_call6(l,capture,propagate,default$0,evs[1],Brr[7][87],_cx_),
         _cw_];
      function _cz_(_cC_){return up_cb(evs,_cC_)}
      var
       _cA_=
        [0,
         caml_call6(l,capture,propagate,default$0,evs[1],Brr[7][90],_cz_),
         _cy_];
      function _cB_(e)
       {var
         step=caml_call1(Note[1][1],0),
         epos=set_mouse_pos(step,evs,e),
         match=caml_call1(Brr[7][32][12],e);
        if(2 < match >>> 0)
         {warn_but(0);var send_down=evs[15],set=evs[13]}
        else
         switch(match)
          {case 0:var send_down=evs[15],set=evs[13];break;
           case 1:var send_down=evs[21],set=evs[19];break;
           default:var send_down=evs[27],set=evs[25]}
        caml_call2(set,[0,step],1);
        caml_call2(send_down,[0,step],epos);
        return caml_call1(Note[1][2],step)}
      var
       unlisten=
        [0,
         caml_call6(l,capture,propagate,default$0,evs[1],Brr[7][84],_cB_),
         _cA_];
      evs[5] = unlisten;
      return evs}
    function on_el$1(capture,propagate,default$0,normalize,pt,e)
     {var evs=on_target$1(capture,propagate,default$0,normalize,pt,e);
      function _cl_(param){return destroy(evs)}
      caml_call2(_c_[14],_cl_,e);
      return evs}
    function pos(evs){return evs[6]}
    function dpos(evs){return evs[8]}
    function mem(evs){return evs[10]}
    function left(evs){return evs[12]}
    function left_down(evs){return evs[14]}
    function left_up(evs){return evs[16]}
    function mid(evs){return evs[18]}
    function mid_down(evs){return evs[20]}
    function mid_up(evs){return evs[22]}
    function right(evs){return evs[24]}
    function right_down(evs){return evs[26]}
    function right_up(evs){return evs[28]}
    function url(opt,_ca_,url)
     {if(opt)var sth=opt[1],x=sth;else var x=0;
      if(_ca_)var sth$0=_ca_[1],y=sth$0;else var y=0;
      var _cb_=0 === x?1:0,_cc_=_cb_?0 === y?1:0:_cb_;
      if(_cc_)
       {var _cd_=caml_call2(Jstr[8],"url(",url);
        return caml_call2(Jstr[8],_cd_,")")}
      var
       _ce_=caml_call2(Jstr[33],0,y),
       _cf_=Jstr[5],
       _cg_=caml_call2(Jstr[33],0,x),
       _ch_=caml_call2(Jstr[8],"url(",url),
       _ci_=caml_call2(Jstr[8],_ch_,") "),
       _cj_=caml_call2(Jstr[8],_ci_,_cg_),
       _ck_=caml_call2(Jstr[8],_cj_,_cf_);
      return caml_call2(Jstr[8],_ck_,_ce_)}
    var
     auto="auto",
     default$0="default",
     none="none",
     context_menu="context-menu",
     help="help",
     pointer="pointer",
     progress="progress",
     wait="wait",
     cell="cell",
     crosshair="crosshair",
     text="text",
     vertical_text="vertical-text",
     alias="alias",
     copy="copy",
     move="move",
     no_drop="no-drop",
     not_allowed="not-allowed",
     grab="grab",
     grabbing="grabbing",
     e_resize="e-resize",
     n_resize="n-resize",
     ne_resize="ne-resize",
     nw_resize="nw-resize",
     s_resize="s-resize",
     se_resize="se-resize",
     sw_resize="sw-resize",
     w_resize="w-resize",
     ew_resize="ew-resize",
     ns_resize="ns-resize",
     nesw_resize="nesw-resize",
     nwse_resize="nwse-resize",
     col_resize="col-resize",
     row_resize="row-resize",
     all_scroll="all-scroll",
     zoom_in="zoom-in",
     zoom_out="zoom-out",
     Cursor=
      [0,
       url,
       auto,
       default$0,
       none,
       context_menu,
       help,
       pointer,
       progress,
       wait,
       cell,
       crosshair,
       text,
       vertical_text,
       alias,
       copy,
       move,
       no_drop,
       not_allowed,
       grab,
       grabbing,
       e_resize,
       n_resize,
       ne_resize,
       nw_resize,
       s_resize,
       se_resize,
       sw_resize,
       w_resize,
       ew_resize,
       ns_resize,
       nesw_resize,
       nwse_resize,
       col_resize,
       row_resize,
       all_scroll,
       zoom_in,
       zoom_out];
    function in_fullscreen(param)
     {var _b$_=caml_call1(Brr[10][16],Brr[16][2]);
      return caml_call1(Stdlib_option[11],_b$_)}
    var
     _y_=in_fullscreen(0),
     match=caml_call2(Note[4][3],0,_y_),
     set_fullscreen=match[2],
     is_fullscreen=match[1];
    function change(e){return caml_call2(set_fullscreen,0,in_fullscreen(0))}
    var _z_=caml_call1(Brr[10][1],Brr[16][2]);
    caml_call4(Brr[7][20],0,Brr[7][70],change,_z_);
    var match$0=caml_call1(Note[3][3],0),send_quit=match$0[2],quit=match$0[1];
    function send_quit$0(e){return caml_call2(send_quit,0,0)}
    var _A_=caml_call1(Brr[10][1],Brr[16][2]);
    caml_call4(Brr[7][20],0,Brr[7][119],send_quit$0,_A_);
    function tick_now(param){return caml_call1(Brr[15][9],Brr[16][4]) / 1000.}
    var start=tick_now(0);
    function elapsed(param){return tick_now(0) - start}
    function counter(param){return tick_now(0)}
    function counter_value(c){return tick_now(0) - c}
    function tick$0(span)
     {var
       match=caml_call1(Note[3][3],0),
       send_e=match[2],
       e=match[1],
       c=counter(0);
      function action(param){return caml_call2(send_e,0,counter_value(c))}
      var ms=span * 1000. | 0;
      caml_call2(Brr[16][8],ms,action);
      return e}
    function delay(span,f){caml_call2(Brr[16][8],span * 1000. | 0,f);return 0}
    function to_jstr$0(u,s)
     {if(17286 === u)
       {var _b7_=caml_call2(Jstr[35],0,s * 1000.);
        return caml_call2(Jstr[8],_b7_,"ms")}
      if(3855339 <= u)
       {var
         _b8_=caml_jsstring_of_string(cst_s),
         _b9_=caml_call2(Jstr[35],0,s * 1000000.);
        return caml_call2(Jstr[8],_b9_,_b8_)}
      var _b__=caml_call2(Jstr[35],0,s);
      return caml_call2(Jstr[8],_b__,"s")}
    var noticed=0.1,interrupted=1.,left$0=10.;
    function feel_action(feel,set_feel,param)
     {var match=caml_call1(Note[4][6],feel);
      if(546033356 === match)
       var delay=9.,new_feel=-952706910;
      else
       {if(847852583 <= match)throw [0,Assert_failure,_B_];
        var delay=0.,new_feel=847852583}
      caml_call1(set_feel,new_feel);
      if(delay == 0.)return 0;
      function action(_b6_){return feel_action(feel,set_feel,_b6_)}
      var ms=delay * 1000. | 0;
      caml_call2(Brr[16][8],ms,action);
      return 0}
    function feel(param)
     {var
       match=caml_call2(Note[4][3],0,546033356),
       set_feel=match[2],
       feel=match[1];
      function _b4_(eta){return caml_call2(set_feel,0,eta)}
      function action(_b5_){return feel_action(feel,_b4_,_b5_)}
      caml_call2(Brr[16][8],1000,action);
      return feel}
    var
     ui_active="ui-active",
     ui_button="ui-button",
     ui_button_selector="ui-button-selector",
     ui_dir_align_center="ui-dir-align-center",
     ui_dir_align_distribute="ui-dir-align-distribute",
     ui_dir_align_end="ui-dir-align-end",
     ui_dir_align_justify="ui-dir-align-justify",
     ui_dir_align_start="ui-dir-align-start",
     ui_dir_align_stretch="ui-dir-align-stretch",
     ui_dir_h="ui-dir-h",
     ui_dir_v="ui-dir-v",
     ui_disabled="ui-disabled",
     ui_editing="ui-editing",
     ui_file_selector="ui-file-selector",
     ui_group="ui-group",
     ui_label="ui-label",
     ui_menu_selector="ui-menu-selector",
     ui_selected="ui-selected",
     ui_slider_selector="ui-slider-selector",
     ui_str_editor="ui-str-editor",
     ui_xdir_align_center="ui-xdir-align-center",
     ui_xdir_align_distribute="ui-xdir-align-distribute",
     ui_xdir_align_end="ui-xdir-align-end",
     ui_xdir_align_justify="ui-xdir-align-justify",
     ui_xdir_align_start="ui-xdir-align-start",
     ui_xdir_align_stretch="ui-xdir-align-stretch",
     touch_target_size=9.,
     touch_target_size_min=7.,
     touch_target_pad=2.,
     average_finger_width=11.;
    function disabled(enabled)
     {function is_disabled(enabled){return enabled?0:[0,Jstr[4]]}
      return caml_call3(Note[4][14],0,is_disabled,enabled)}
    function el_def_tip(tip,el)
     {if(tip)
       {var tip$0=tip[1],_b3_=caml_call1(Note[4][29][4],tip$0);
        return caml_call3(_c_[4],Brr[8][7][19],_b3_,el)}
      return 0}
    var
     dir_cls=[0,[0,72,ui_dir_h],[0,[0,86,ui_dir_v],0]],
     align_cls=
      [0,
       [0,389604418,ui_dir_align_start],
       [0,
        [0,3455931,ui_dir_align_end],
        [0,
         [0,980392437,ui_dir_align_center],
         [0,
          [0,-788068560,ui_dir_align_justify],
          [0,
           [0,-317645503,ui_dir_align_distribute],
           [0,[0,-1012636187,ui_dir_align_stretch],0]]]]]],
     xalign_cls=
      [0,
       [0,389604418,ui_xdir_align_start],
       [0,
        [0,3455931,ui_xdir_align_end],
        [0,
         [0,980392437,ui_xdir_align_center],
         [0,
          [0,-788068560,ui_xdir_align_justify],
          [0,
           [0,-317645503,ui_xdir_align_distribute],
           [0,[0,-1012636187,ui_xdir_align_stretch],0]]]]]];
    function set_class$0(classes,el,v)
     {var _b2_=caml_call2(Stdlib_list[43],v,classes);
      return caml_call3(Brr[9][26],_b2_,1,el)}
    function v(cl,opt,_bZ_,_bY_,_bX_,dir,cs)
     {if(opt)var sth=opt[1],enabled=sth;else var enabled=Note[4][28][2];
      if(_bZ_)var sth$0=_bZ_[1],action=sth$0;else var action=Note[3][5];
      if(_bY_)
       var sth$1=_bY_[1],xdir_align=sth$1;
      else
       var xdir_align=389604418;
      if(_bX_)var sth$2=_bX_[1],dir_align=sth$2;else var dir_align=389604418;
      var
       _b0_=[0,caml_call1(Brr[8][12],ui_group),0],
       at=caml_call3(Brr[8][5],Brr[8][7][4],cl,_b0_),
       el=caml_call3(Brr[9][82],0,[0,at],0);
      caml_call2(_c_[2],el,cs);
      var _b1_=caml_call1(Note[4][28][3],enabled);
      caml_call3(_c_[8],ui_disabled,_b1_,el);
      set_class$0(dir_cls,el,dir);
      set_class$0(align_cls,el,dir_align);
      set_class$0(xalign_cls,el,xdir_align);
      return [0,el,enabled,action,dir,dir_align,xdir_align]}
    function dir(g){return g[4]}
    function dir_align(g){return g[5]}
    function xdir_align(g){return g[6]}
    function action(g){return g[3]}
    function enabled(g){return g[2]}
    function el(g){return g[1]}
    function with_action(action,g){return [0,g[1],g[2],action,g[4],g[5],g[6]]}
    function hide_action(g){return with_action(Note[3][5],g)}
    function v$0(cl,opt,tip,cs)
     {if(opt)var sth=opt[1],enabled=sth;else var enabled=Note[4][28][2];
      var
       _bV_=[0,caml_call1(Brr[8][12],ui_label),0],
       at=caml_call3(Brr[8][5],Brr[8][7][4],cl,_bV_),
       el=caml_call3(Brr[9][82],0,[0,at],0);
      caml_call2(_c_[2],el,cs);
      el_def_tip(tip,el);
      var _bW_=caml_call1(Note[4][28][3],enabled);
      caml_call3(_c_[8],ui_disabled,_bW_,el);
      return [0,el,enabled]}
    function el$0(l){return l[1]}
    function enabled$0(l){return l[2]}
    var button_str="button";
    function at_base(cl)
     {var
       _bT_=[0,caml_call1(Brr[8][12],ui_button),0],
       _bU_=[0,caml_call1(Brr[8][35],button_str),_bT_];
      return caml_call3(Brr[8][5],Brr[8][7][4],cl,_bU_)}
    function v$1(cl,opt,_bO_,tip,cs,v)
     {if(opt)var sth=opt[1],active=sth;else var active=Note[4][28][1];
      if(_bO_)var sth$0=_bO_[1],enabled=sth$0;else var enabled=Note[4][28][2];
      var
       _bP_=[0,at_base(cl)],
       el=caml_call3(Brr[9][69],0,_bP_,0),
       _bQ_=caml_call1(_d_[6],v),
       action=caml_call6(_d_[3],0,0,0,Brr[7][44],_bQ_,el);
      caml_call2(_c_[2],el,cs);
      el_def_tip(tip,el);
      var _bR_=disabled(enabled);
      caml_call3(_c_[4],Brr[8][7][7],_bR_,el);
      var _bS_=caml_call1(Note[4][28][3],enabled);
      caml_call3(_c_[8],ui_disabled,_bS_,el);
      caml_call3(_c_[8],ui_active,active,el);
      return [0,el,action,active,enabled]}
    function action$0(b){return b[2]}
    function enabled$1(b){return b[4]}
    function active(b){return b[3]}
    function el$1(b){return b[1]}
    var file_str="file",accept_str="accept",multiple_str="multiple";
    function file_selector(multiple,get,cl,opt,_bB_,tip,_bA_,cs)
     {if(opt)var sth=opt[1],active=sth;else var active=Note[4][28][1];
      if(_bB_)var sth$0=_bB_[1],enabled=sth$0;else var enabled=Note[4][28][2];
      if(_bA_)var sth$1=_bA_[1],exts=sth$1;else var exts=0;
      if(exts)
       var
        _bC_=caml_jsstring_of_string(caml_call2(Stdlib_string[7],cst$0,exts)),
        at=[0,caml_call2(Brr[8][1],accept_str,_bC_),0];
      else
       var at=0;
      var
       _bD_=caml_call2(Brr[8][1],multiple_str,Jstr[4]),
       at$0=caml_call3(Brr[8][4],multiple,_bD_,at),
       at$1=[0,caml_call1(Brr[8][35],file_str),at$0],
       input=caml_call3(Brr[9][106],0,[0,at$1],0),
       _bE_=at_base(cl),
       _bF_=[0,[0,caml_call1(Brr[8][12],ui_file_selector),_bE_]],
       el=caml_call3(Brr[9][69],0,_bF_,0);
      caml_call4(Brr[9][30],0,Brr[9][27][4],"none",input);
      function forward(e)
       {caml_call3(Brr[9][24],Brr[9][22][10],Jstr[4],input);
        return caml_call1(Brr[9][51],input)}
      caml_call4(Brr[7][20],0,Brr[7][44],forward,el);
      function _bG_(cs){return caml_call2(Stdlib[37],cs,[0,input,0])}
      var
       _bH_=[0,function(_bN_,_bM_){return _bN_ === _bM_?1:0}],
       _bI_=caml_call3(Note[4][14],_bH_,_bG_,cs);
      caml_call2(_c_[2],el,_bI_);
      el_def_tip(tip,el);
      var _bJ_=disabled(enabled);
      caml_call3(_c_[4],Brr[8][7][7],_bJ_,el);
      var _bK_=caml_call1(Note[4][28][3],enabled);
      caml_call3(_c_[8],ui_disabled,_bK_,el);
      caml_call3(_c_[8],ui_active,active,el);
      var
       _bL_=caml_call1(get,input),
       action=caml_call6(_d_[3],0,0,0,Brr[7][43],_bL_,input);
      return [0,el,action,active,enabled]}
    function _C_(i,param)
     {var _bz_=caml_call1(Brr[9][53][1],i);
      return caml_call1(Stdlib_list[5],_bz_)}
    var _D_=0;
    function file_selector$0(_bt_,_bu_,_bv_,_bw_,_bx_,_by_)
     {return file_selector(_D_,_C_,_bt_,_bu_,_bv_,_bw_,_bx_,_by_)}
    function _E_(i,param){return caml_call1(Brr[9][53][1],i)}
    var _F_=1;
    function files_selector(_bn_,_bo_,_bp_,_bq_,_br_,_bs_)
     {return file_selector(_F_,_E_,_bn_,_bo_,_bp_,_bq_,_br_,_bs_)}
    var text_str="text",att_size="size";
    function v$2(cl,opt,_aT_,length,str)
     {if(opt)var sth=opt[1],enabled=sth;else var enabled=Note[4][28][2];
      if(_aT_)var sth$0=_aT_[1],edit=sth$0;else var edit=Note[3][5];
      var
       span=caml_call3(Brr[9][141],0,0,0),
       _aU_=[0,[0,caml_call1(Brr[8][35],text_str),0]],
       editor=caml_call3(Brr[9][106],0,_aU_,0),
       _aV_=[0,caml_call1(Brr[8][12],ui_str_editor),0],
       at=caml_call3(Brr[8][5],Brr[8][7][4],cl,_aV_),
       div=caml_call3(Brr[9][82],0,[0,at],[0,span,[0,editor,0]]),
       _aW_=[0,caml_call6(_d_[3],0,0,0,Brr[7][44],_d_[5],div),0],
       _aX_=[0,caml_call2(Note[3][10],edit,0),_aW_],
       edit$0=caml_call1(Note[3][13],_aX_);
      function _aY_(enabled,param){return enabled?_G_:0}
      var
       edit$1=caml_call3(Note[4][17],enabled,edit$0,_aY_),
       keys=caml_call6(_d_[3],0,0,0,Brr[7][76],of_ev,editor),
       _aZ_=0,
       _a0_=258914209;
      function _a1_(_bm_){return caml_equal(_a0_,_bm_)}
      var
       _a2_=caml_call2(Note[3][11],_a1_,keys),
       escape_key=caml_call2(Note[3][10],_a2_,_aZ_),
       _a3_=1,
       _a4_=1036130512;
      function _a5_(_bl_){return caml_equal(_a4_,_bl_)}
      var
       _a6_=caml_call2(Note[3][11],_a5_,keys),
       return_key=caml_call2(Note[3][10],_a6_,_a3_),
       _a7_=caml_call1(_d_[6],1),
       start_focus=caml_call6(_d_[3],0,0,0,Brr[7][67],_a7_,editor),
       _a8_=caml_call1(_d_[6],0),
       stop_focus=caml_call6(_d_[3],0,0,0,Brr[7][40],_a8_,editor),
       _a9_=caml_call1(Note[3][13],[0,start_focus,[0,stop_focus,0]]),
       _a__=caml_call1(Brr[9][44],editor),
       focus=caml_call3(Note[4][9],0,_a__,_a9_),
       _a$_=caml_call1(Note[3][13],[0,start_focus,[0,escape_key,0]]),
       valid=caml_call3(Note[4][9],0,1,_a$_),
       start=caml_call2(Note[3][10],edit$1,1),
       _ba_=caml_call1(Note[3][13],[0,escape_key,[0,return_key,0]]),
       key_stop=caml_call2(Note[3][10],_ba_,0),
       _bb_=caml_call1(Note[3][13],[0,key_stop,[0,stop_focus,0]]),
       stop=caml_call2(Note[3][10],_bb_,0),
       _bc_=caml_call1(Note[3][13],[0,start,[0,stop,0]]),
       editing=caml_call3(Note[4][9],0,0,_bc_);
      function _bd_(valid,param)
       {return valid?[0,caml_call2(Brr[9][23],Brr[9][22][10],editor)]:0}
      var action=caml_call3(Note[4][17],valid,stop_focus,_bd_);
      function _be_(s){return [0,caml_call2(Brr[9][2],0,s),0]}
      var _bf_=caml_call3(Note[4][14],0,_be_,str);
      caml_call2(_c_[2],span,_bf_);
      function _bg_(param,e){return caml_call1(Brr[9][52],e)}
      caml_call3(_c_[15],_bg_,start,editor);
      var _bh_=caml_call2(Note[4][18],str,edit$1);
      caml_call3(_c_[5],Brr[9][22][10],_bh_,editor);
      caml_call2(_c_[12],focus,editor);
      var _bi_=disabled(enabled);
      caml_call3(_c_[4],Brr[8][7][7],_bi_,editor);
      var _bj_=caml_call1(Note[4][28][3],enabled);
      caml_call3(_c_[8],ui_disabled,_bj_,div);
      caml_call3(_c_[8],ui_editing,editing,div);
      if(length)
       {var
         l=length[1],
         _bk_=function(l){return [0,caml_call2(Jstr[33],0,l)]},
         size=caml_call3(Note[4][14],0,_bk_,l);
        caml_call3(_c_[4],att_size,size,editor)}
      return [0,div,enabled,editing,action]}
    function action$1(e){return e[4]}
    function enabled$2(e){return e[2]}
    function editing(e){return e[3]}
    function el$2(e){return e[1]}
    function v$3(cl,opt,label,choices,sel)
     {if(opt)var sth=opt[1],enabled=sth;else var enabled=Note[4][28][2];
      var
       _aC_=[0,caml_call1(Brr[8][12],ui_button),0],
       at=[0,caml_call1(Brr[8][12],ui_menu_selector),_aC_],
       at$0=caml_call3(Brr[8][5],Brr[8][7][4],cl,at),
       e=caml_call3(Brr[9][138],0,[0,at$0],0);
      function _aD_(_aS_)
       {var eta=caml_call2(Brr[9][23],Brr[9][22][10],e),arg=Jstr[32];
        return caml_call2(arg,0,eta)}
      var
       _aE_=caml_call6(_d_[3],0,0,0,Brr[7][43],_aD_,e),
       sel_idx_change=caml_call1(Note[3][19][1],_aE_),
       eq=caml_call1(Note[4][4],sel);
      function _aF_(selected,param$1)
       {var i=0,param=param$1;
        for(;;)
         {if(param)
           {var c=param[1];
            if(caml_call2(eq,c,selected))return caml_call2(Jstr[33],0,i);
            var param$0=param[2],i$0=i + 1 | 0,i=i$0,param=param$0;
            continue}
          return Jstr[4]}}
      var
       sel_index=caml_call4(Note[4][26],0,_aF_,sel,choices),
       action=caml_call3(Note[4][16],choices,sel_idx_change,Stdlib_list[7]);
      function opt$0(i,v)
       {var
         _aO_=caml_call1(label,v),
         _aP_=[0,caml_call2(Brr[9][2],0,_aO_),0],
         _aQ_=caml_call2(Jstr[33],0,i),
         _aR_=[0,[0,caml_call1(Brr[8][36],_aQ_),0]];
        return caml_call3(Brr[9][124],0,_aR_,_aP_)}
      var
       _aG_=caml_call1(Stdlib_list[18],opt$0),
       opts=caml_call3(Note[4][14],0,_aG_,choices);
      function set_children(opts,sel_index)
       {caml_call2(Brr[9][15],e,opts);
        return caml_call3(Brr[9][24],Brr[9][22][10],sel_index,e)}
      var
       _aH_=caml_call1(Note[4][1],sel_index),
       _aI_=caml_call1(Note[4][1],opts),
       _aJ_=caml_call1(Note[2][1],set_children),
       _aK_=caml_call2(Note[2][3],_aJ_,_aI_),
       set_children$0=caml_call2(Note[2][3],_aK_,_aH_),
       _aL_=caml_call2(Note[2][4],0,set_children$0);
      caml_call2(_c_[16],e,_aL_);
      var _aM_=disabled(enabled);
      caml_call3(_c_[4],Brr[8][7][7],_aM_,e);
      var _aN_=caml_call1(Note[4][28][3],enabled);
      caml_call3(_c_[8],ui_disabled,_aN_,e);
      caml_call3(_c_[6],Brr[9][22][10],sel_index,e);
      return [0,e,enabled,action]}
    function action$2(e){return e[3]}
    function enabled$3(e){return e[2]}
    function el$3(e){return e[1]}
    var Menu=[0,v$3,action$2,enabled$3,el$3];
    function v$4
     (class$0,
      opt,
      button_class,
      button_tip,
      xdir_align,
      dir_align,
      dir,
      label,
      choices,
      sel)
     {if(opt)var sth=opt[1],enabled=sth;else var enabled=Note[4][28][2];
      function but(v)
       {if(button_class)
         var f=button_class[1],class$0=[0,caml_call1(f,v)];
        else
         var class$0=0;
        if(button_tip)
         var f$0=button_tip[1],tip=[0,caml_call1(f$0,v)];
        else
         var tip=0;
        var label$0=caml_call1(label,v);
        return v$1(class$0,0,[0,enabled],tip,label$0,v)}
      var
       _ah_=caml_call1(Stdlib_list[17],but),
       _ai_=[0,function(_aB_,_aA_){return _aB_ === _aA_?1:0}],
       buts=caml_call3(Note[4][14],_ai_,_ah_,choices),
       _aj_=caml_call1(Stdlib_list[17],el$1),
       _ak_=[0,function(_az_,_ay_){return _az_ === _ay_?1:0}],
       els=caml_call3(Note[4][14],_ak_,_aj_,buts);
      function select(buts)
       {var _ax_=caml_call2(Stdlib_list[17],action$0,buts);
        return caml_call1(Note[3][13],_ax_)}
      var
       _al_=[0,function(_aw_,_av_){return _aw_ === _av_?1:0}],
       _am_=caml_call3(Note[4][14],_al_,select,buts),
       action=caml_call1(Note[3][8],_am_),
       _an_=caml_call1(Note[4][1],buts),
       _ao_=caml_call1(Note[4][1],choices),
       _ap_=caml_call1(Note[4][1],sel),
       eq=caml_call1(Note[4][4],sel);
      function _aq_(sel$0,choices$0,buts$0)
       {if(sel$0)
         {var sel=sel$0[1],choices=choices$0,buts=buts$0;
          for(;;)
           {if(choices)
             {if(buts)
               {var b=buts[1],cs=choices[2],c=choices[1],bs=buts[2];
                if(caml_call2(eq,[0,c],[0,sel]))
                 {caml_call3(Brr[9][26],ui_selected,1,b[1]);
                  var choices=cs,buts=bs;
                  continue}
                var bs$0=buts[2];
                caml_call3(Brr[9][26],ui_selected,0,b[1]);
                var choices=cs,buts=bs$0;
                continue}}
            else
             if(! buts)return 0;
            throw [0,Assert_failure,_H_]}}
        function deselect(b){return caml_call3(Brr[9][26],ui_selected,0,b[1])}
        return caml_call2(Stdlib_list[15],deselect,buts$0)}
      var
       _ar_=caml_call1(Note[2][1],_aq_),
       _as_=caml_call2(Note[2][3],_ar_,_ap_),
       _at_=caml_call2(Note[2][3],_as_,_ao_),
       sel_obs=caml_call2(Note[2][3],_at_,_an_),
       g=v(class$0,0,[0,action],xdir_align,dir_align,dir,els);
      caml_call3(Brr[9][26],ui_button_selector,1,g[1]);
      var _au_=caml_call2(Note[2][4],0,sel_obs);
      caml_call2(_c_[16],g[1],_au_);
      return g}
    var
     Button=[0,v$4],
     Value_selector=[0,Menu,Button],
     range_str="range",
     min_str="min",
     max_str="max",
     step_str="step";
    function v$5(class$0,opt,_Y_,_X_,_W_,v)
     {if(opt)var sth=opt[1],enabled=sth;else var enabled=Note[4][28][2];
      if(_Y_)
       var sth$0=_Y_[1],min=sth$0;
      else
       var min=caml_call2(Note[4][8],0,0.);
      if(_X_)
       var sth$1=_X_[1],max=sth$1;
      else
       var max=caml_call2(Note[4][8],0,1.);
      if(_W_)
       var sth$2=_W_[1],step=sth$2;
      else
       var step=caml_call2(Note[4][8],0,0);
      function _Z_(v){return caml_call2(Jstr[35],0,v)}
      var
       v$0=caml_call3(Note[4][14],0,_Z_,v),
       ___=[0,caml_call1(Brr[8][33],-1),0],
       _$_=[0,caml_call1(Brr[8][12],ui_slider_selector),___],
       at=[0,caml_call1(Brr[8][35],range_str),_$_],
       e=caml_call3(Brr[9][106],0,[0,at],0);
      function _aa_(_ag_)
       {var s=caml_call2(Brr[9][23],Brr[9][22][10],e);
        return caml_call1(Jstr[24],s)
                ?0
                :[0,
                  runtime.caml_float_of_string
                   (runtime.caml_string_of_jsstring(s))]}
      var
       _ab_=caml_call6(_d_[3],0,0,0,Brr[7][74],_aa_,e),
       action=caml_call1(Note[3][19][1],_ab_);
      function _ac_(v){return [0,caml_call2(Jstr[35],0,v)]}
      var min_att=caml_call3(Note[4][14],0,_ac_,min);
      function _ad_(v){return [0,caml_call2(Jstr[35],0,v)]}
      var max_att=caml_call3(Note[4][14],0,_ad_,max);
      function eta(param)
       {if(param)
         {var f=param[1];
          return [0,caml_jsstring_of_string(caml_call1(Stdlib[35],f))]}
        return [0,"any"]}
      var arg=Note[4][14],step_att=caml_call1(caml_call2(arg,0,eta),step);
      caml_call3(_c_[4],min_str,min_att,e);
      caml_call3(_c_[4],max_str,max_att,e);
      caml_call3(_c_[4],step_str,step_att,e);
      var _ae_=disabled(enabled);
      caml_call3(_c_[4],Brr[8][7][7],_ae_,e);
      var _af_=caml_call1(Note[4][28][3],enabled);
      caml_call3(_c_[8],ui_disabled,_af_,e);
      caml_call3(_c_[6],Brr[9][22][10],v$0,e);
      function unset_focus(param){return caml_call2(Brr[9][45],0,e)}
      caml_call4(Brr[7][20],0,Brr[7][67],unset_focus,e);
      return [0,e,enabled,action]}
    function action$3(r){return r[3]}
    function enabled$4(r){return r[2]}
    function el$4(r){return r[1]}
    var
     Brr_note_kit=
      [0,
       [0,is_fullscreen,quit],
       [0,
        of_ev,
        equal,
        compare,
        to_jstr,
        on_target$0,
        on_el$0,
        any_down,
        any_up,
        any_holds,
        down,
        up,
        holds,
        alt,
        ctrl,
        meta,
        shift],
       [0,
        pt,
        on_target$1,
        on_el$1,
        destroy,
        pos,
        dpos,
        mem,
        left,
        left_down,
        left_up,
        mid,
        mid_down,
        mid_up,
        right,
        right_down,
        right_up,
        Cursor],
       [0,elapsed,tick$0,delay,counter,counter_value,to_jstr$0],
       [0,
        noticed,
        interrupted,
        left$0,
        feel,
        touch_target_size,
        touch_target_size_min,
        touch_target_pad,
        average_finger_width],
       [0,
        [0,
         v,
         dir,
         dir_align,
         xdir_align,
         action,
         enabled,
         el,
         with_action,
         hide_action],
        [0,v$0,enabled$0,el$0],
        [0,v$1,action$0,enabled$1,active,el$1,file_selector$0,files_selector],
        [0,v$2,action$1,enabled$2,editing,el$2],
        Value_selector,
        [0,v$5,action$3,enabled$4,el$4]]];
    caml_register_global(206,Brr_note_kit,"Brr_note_kit");
    var json=Jv[12].JSON;
    function decode_unsafe_ocaml_value(s)
     {var jsarray=caml_call1(Jv[29][1],0).constructor;
      function reviver(key,v)
       {var _V_=caml_call1(Jv[2],v);
        if(caml_call2(Jstr[28],_V_,"string"))return caml_string_of_jsbytes(v);
        if
         (caml_call2(Jv[3],v,jsarray)
          &&
          4
          ===
          caml_call1(Jv[29][2],v)
          &&
          255
          ===
          v[0])
         return runtime.caml_int64_create_lo_mi_hi(v[1],v[2],v[3]);
        return v}
      return json.parse(s,reviver)}
    function scope_store(param)
     {return -521584842 <= param
              ?caml_call1(Brr_io[8][2],Brr[16][5])
              :caml_call1(Brr_io[8][1],Brr[16][5])}
    var key_prefix="k",id=[0,-1];
    function key(ns,param)
     {id[1] = id[1] + 1 | 0;
      var id$0=caml_call2(Jstr[33],0,id[1]);
      if(ns)
       {var
         ns$0=ns[1],
         _T_=caml_call2(Jstr[8],ns$0,"-"),
         _U_=caml_call2(Jstr[8],_T_,key_prefix);
        return caml_call2(Jstr[8],_U_,id$0)}
      return caml_call2(Jstr[8],key_prefix,id$0)}
    var version=key([0,"brr"],0);
    function mem$0(opt,k)
     {if(opt)var sth=opt[1],scope=sth;else var scope=-792573452;
      var _S_=scope_store(scope);
      return 0 !== caml_call2(Brr_io[8][5],_S_,k)?1:0}
    function add(opt,k,v)
     {if(opt)var sth=opt[1],scope=sth;else var scope=-792573452;
      var string=cst$1.constructor,int64=_I_.constructor;
      function replacer(key,v)
       {return caml_call2(Jv[3],v,string)
                ?runtime.caml_jsbytes_of_string(v)
                :caml_call2(Jv[3],v,int64)
                  ?runtime.caml_js_from_array([0,255,v.lo,v.mi,v.hi])
                  :v}
      var
       _Q_=json.stringify(v,replacer),
       _R_=scope_store(scope),
       eta=caml_call3(Brr_io[8][6],_R_,k,_Q_);
      return caml_call1(caml_call3(Brr[12][7],0,0,0),eta)}
    function rem(opt,k)
     {if(opt)var sth=opt[1],scope=sth;else var scope=-792573452;
      var _P_=scope_store(scope);
      return caml_call2(Brr_io[8][7],_P_,k)}
    function find(opt,k)
     {if(opt)var sth=opt[1],scope=sth;else var scope=-792573452;
      var _O_=scope_store(scope),match=caml_call2(Brr_io[8][5],_O_,k);
      if(match){var v=match[1];return [0,decode_unsafe_ocaml_value(v)]}
      return 0}
    function get(opt,absent,k)
     {if(opt)var sth=opt[1],scope=sth;else var scope=-792573452;
      var _N_=scope_store(scope),match=caml_call2(Brr_io[8][5],_N_,k);
      if(match){var v$0=match[1];return decode_unsafe_ocaml_value(v$0)}
      if(absent){var v=absent[1];return v}
      return caml_call1(Stdlib[1],cst_key_unbound)}
    function clear(opt,param)
     {if(opt)var sth=opt[1],scope=sth;else var scope=-792573452;
      var _M_=scope_store(scope);
      return caml_call1(Brr_io[8][8],_M_)}
    function force_version(opt,v)
     {if(opt)var sth=opt[1],scope=sth;else var scope=-792573452;
      var match=find([0,scope],version);
      if(match)
       {var sv=match[1];
        caml_call1(Brr[12][9],[0,v,[0,sv,0]]);
        var _L_=runtime.caml_notequal(v,sv);
        return _L_?(clear([0,scope],0),add([0,scope],version,v)):_L_}
      return add([0,scope],version,v)}
    var storage="storage",_J_=caml_call1(Brr[13][1],Brr[16][5]);
    function _K_(param){return 0}
    var
     ev=caml_call6(_d_[1],0,0,0,storage,_K_,_J_),
     Brr_note_legacy=[0,[0,key,mem$0,add,rem,find,get,clear,ev,force_version]];
    caml_register_global(208,Brr_note_legacy,"Brr_note_legacy");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJicnJfbm90ZS5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzQ29udGVudCI6W119
