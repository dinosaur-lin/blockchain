(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_equal=runtime.caml_equal,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_trampoline=runtime.caml_trampoline,
     caml_trampoline_return=runtime.caml_trampoline_return,
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
    function caml_call5(f,a0,a1,a2,a3,a4)
     {return f.length == 5
              ?f(a0,a1,a2,a3,a4)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_option_is_None$0=caml_string_of_jsbytes("option is None"),
     cst_option_is_None=caml_string_of_jsbytes("option is None"),
     cst_TOOD=caml_string_of_jsbytes("TOOD"),
     cst_step_already_executed=caml_string_of_jsbytes("step already executed"),
     cst_Note_Src_Step=caml_string_of_jsbytes("Note.Src.Step"),
     Stdlib=global_data.Stdlib,
     Stdlib_list=global_data.Stdlib__list,
     Stdlib_format=global_data.Stdlib__format,
     CamlinternalMod=global_data.CamlinternalMod,
     Stdlib_set=global_data.Stdlib__set,
     Src=
      caml_call2
       (CamlinternalMod[1],
        [0,caml_string_of_jsbytes("src/note.ml"),19,6],
        [0,[0,0,0,0,0,0,0,0,0,0,0]]),
     C=
      caml_call2
       (CamlinternalMod[1],
        [0,caml_string_of_jsbytes("src/note.ml"),99,6],
        [0,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]),
     Logr=
      caml_call2
       (CamlinternalMod[1],
        [0,caml_string_of_jsbytes("src/note.ml"),232,6],
        [0,[0,0,0,0,0,0,0,0,0,0,0,0,0]]),
     Srcs=caml_call1(Stdlib_set[1],[0,Src[1]]),
     _t_=[0,0],
     _b_=
      [0,
       [18,
        [1,[0,0,caml_string_of_jsbytes("")]],
        [12,123,[15,[12,125,[17,0,0]]]]],
       caml_string_of_jsbytes("@[{%a}@]")],
     _a_=[0,[0,0,0,0,0,0,0,0,0,0,0]],
     _c_=[0,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],
     _d_=[0,[0,0,0,0,0,0,0,0,0,0,0,0,0]];
    function create(srcs){return [0,srcs,Srcs[1],0]}
    function create$0(param){return create(Srcs[1])}
    var nil=create$0(0),delayed=create$0(0);
    function add_src(step,src)
     {step[1] = caml_call2(Srcs[4],src,step[1]);return 0}
    function add_delayed(step,src)
     {step[2] = caml_call2(Srcs[4],src,step[2]);return 0}
    function add_cleanup(step,clean){step[3] = [0,clean,step[3]];return 0}
    function already_executed(param)
     {return caml_call1(Stdlib[1],cst_step_already_executed)}
    function execute_delayed$0(counter,srcs)
     {var ds=create(srcs);
      delayed[1] = srcs;
      function _ef_(param)
       {var s=param[1],c=caml_call1(Src[3],s);
        caml_call2(C[15],delayed,c);
        return caml_call2(C[7],c,ds)}
      caml_call2(Srcs[14],_ef_,srcs);
      if(counter < 50)
       {var counter$0=counter + 1 | 0;return execute$0(counter$0,ds)}
      return caml_trampoline_return(execute$0,[0,ds])}
    function execute$0(counter,step)
     {function update_src_logs(src)
       {var _ed_=caml_call1(Src[5],src),_ee_=caml_call1(Logr[9],step);
        return caml_call2(Stdlib_list[15],_ee_,_ed_)}
      caml_call2(Srcs[14],update_src_logs,step[1]);
      caml_call2(Srcs[14],Src[8],step[1]);
      var _ea_=step[3];
      function _eb_(f){return caml_call1(f,0)}
      caml_call2(Stdlib_list[15],_eb_,_ea_);
      step[3] = 0;
      add_cleanup(step,already_executed);
      var match=caml_call1(Srcs[2],step[2]);
      if(match)return 0;
      var _ec_=step[2];
      if(counter < 50)
       {var counter$0=counter + 1 | 0;
        return execute_delayed$0(counter$0,_ec_)}
      return caml_trampoline_return(execute_delayed$0,[0,_ec_])}
    function execute_delayed(srcs)
     {return caml_trampoline(execute_delayed$0(0,srcs))}
    function execute(step){return caml_trampoline(execute$0(0,step))}
    function id(param){var s=param[1];return s[1]}
    function cell(s){return s[2]}
    function untyped(s){return s[4]}
    function compare(param,_d$_)
     {var t=_d$_[1],s=param[1];return runtime.caml_int_compare(s[1],t[1])}
    function logrs(param){var s=param[1];return s[3]}
    function add_logr(logr,param)
     {var s=param[1];s[3] = [0,logr,s[3]];return 0}
    function rem_logr(logr,param)
     {var s=param[1],acc=0,param$0=s[3];
      for(;;)
       {if(param$0)
         {var v=param$0[1],vs=param$0[2];
          if(v !== logr)
           {var param$1=param$0[2],acc$0=[0,v,acc],acc=acc$0,param$0=param$1;
            continue}
          var _d__=caml_call2(Stdlib_list[12],vs,acc)}
        else
         var _d__=acc;
        s[3] = _d__;
        return 0}}
    function reset_stamp(param)
     {var s=param[1];return caml_call2(C[7],s[2],nil)}
    var Step=[248,cst_Note_Src_Step,runtime.caml_fresh_oo_id(0)];
    function find_active_step(step,ss)
     {if(step !== nil)return step;
      function find_not_nil(param)
       {var s=param[1],step=caml_call1(C[6],s[2]),_d9_=step !== nil?1:0;
        if(_d9_)throw [0,Step,step];
        return _d9_}
      try
       {caml_call2(Srcs[14],find_not_nil,ss);return nil}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] === Step){var s=exn[2];return s}
        throw exn}}
    var id$0=[0,0];
    function create$1(eq,v)
     {function update(param,_d8_){return 0}
      var cell=caml_call5(C[1],eq,nil,Srcs[1],v,update),src=[];
      id$0[1]++;
      runtime.caml_update_dummy(src,[0,id$0[1],cell,0,[0,src]]);
      var _d7_=caml_call1(Srcs[5],src[4]);
      caml_call2(C[10],cell,_d7_);
      caml_call2(C[11],cell,0);
      return src}
    caml_call3
     (CamlinternalMod[2],
      _a_,
      Src,
      [0,
       compare,
       id,
       cell,
       untyped,
       logrs,
       add_logr,
       rem_logr,
       reset_stamp,
       find_active_step,
       create$1]);
    function create$2(opt,step,srcs,value,update)
     {if(opt)var sth=opt[1],eq=sth;else var eq=caml_equal;
      return [0,eq,step,srcs,1,value,1,update]}
    function const$0(opt,v)
     {if(opt)var sth=opt[1],eq=sth;else var eq=caml_equal;
      function _d5_(param,_d6_){return 0}
      return [0,eq,nil,Srcs[1],0,v,0,_d5_]}
    function eq(c){return c[1]}
    function set_eq(c,eq){c[1] = eq;return 0}
    function with_eq(eq,c){return [0,eq,c[2],c[3],c[4],c[5],c[6],c[7]]}
    function stamp(c){return c[2]}
    function set_stamp(c,stamp){c[2] = stamp;return 0}
    function srcs_changed(c){return c[4]}
    function set_srcs_changed(c,bool){c[4] = bool;return 0}
    function srcs(c){return c[3]}
    function set_srcs(c,srcs){c[4] = 1;c[3] = srcs;return 0}
    function value(c){return c[5]}
    function value_changed(c){return c[6]}
    function set_value(c,v)
     {return caml_call2(c[1],v,c[5])?0:(c[6] = 1,c[5] = v,0)}
    function update(step,c)
     {var _d2_=step !== nil?1:0,_d3_=_d2_?c[2] !== step?1:0:_d2_;
      if(_d3_)
       {c[2] = step;
        c[4] = 0;
        c[6] = 0;
        var _d4_=caml_call2(Srcs[8],c[3],step[1]);
        return caml_call1(Srcs[2],_d4_)?0:caml_call2(c[7],step,c)}
      return _d3_}
    function set_update(c,u){c[7] = u;return 0}
    function src_update(step,c,v)
     {c[6] = 0;
      return caml_call2(c[1],v,c[5])?0:(c[2] = step,c[6] = 1,c[5] = v,1)}
    function up_to_date_value(c)
     {var step=caml_call2(Src[9],nil,c[3]);update(step,c);return c[5]}
    function reset_instant(c){c[6] = 0;c[5] = 0;return 0}
    function set_instant(step,c,v)
     {return v
              ?(c[6]
                =
                1,
                c[5]
                =
                v,
                add_cleanup(step,function(param){return reset_instant(c)}))
              :0}
    function create_instant(step,srcs,value,update)
     {var
       value_changed=value?1:0,
       c=[0,caml_equal,step,srcs,1,value,value_changed,update],
       _d1_=value_changed?runtime.caml_notequal(step,nil):value_changed;
      if(_d1_)add_cleanup(step,function(param){return reset_instant(c)});
      return c}
    function delay(i,z){return caml_call1(Stdlib[2],cst_TOOD)}
    function fix(eq,i,cf)
     {var
       src=caml_call2(Src[10],eq,i),
       src$0=[0,src],
       d=caml_call1(Src[3],src),
       match=caml_call1(cf,d),
       r=match[2],
       c=match[1],
       c_update=c[7];
      function c_update$0(step,self)
       {caml_call2(c_update,step,self);
        var _d0_=c[6];
        return _d0_?add_delayed(step,src$0):_d0_}
      function d_update(step,self)
       {return step === delayed?set_value(self,c[5]):0}
      c[7] = c_update$0;
      d[7] = d_update;
      var _dZ_=caml_call1(C[8],c),step=caml_call2(Src[9],nil,_dZ_);
      update(step,c);
      if(step === nil)execute_delayed(caml_call1(Srcs[5],src$0));
      return r}
    function defer(init,c)
     {var
       src=caml_call2(Src[10],[0,c[1]],init),
       src$0=[0,src],
       d=caml_call1(Src[3],src);
      function update(step,self)
       {if(step === delayed)return set_value(self,c[5]);
        caml_call2(C[15],step,c);
        if(caml_call1(C[9],c))
         {var _dX_=caml_call1(C[8],c);caml_call2(C[10],d,_dX_)}
        var _dY_=caml_call1(C[13],c);
        return _dY_?add_delayed(step,src$0):_dY_}
      d[7] = update;
      var step=caml_call2(Src[9],nil,c[3]);
      update(step,c);
      update(step,d);
      if(step === nil)execute_delayed(caml_call1(Srcs[5],src$0));
      return d}
    function dump_src_ids(ppf,c)
     {var _dT_=caml_call1(Srcs[23],c[3]);
      function _dU_(s){return caml_call1(Src[2],s)}
      var
       _dV_=caml_call2(Stdlib_list[17],_dU_,_dT_),
       _dW_=
        caml_call2(Stdlib_format[121],[0,Stdlib_format[25]],Stdlib_format[17]);
      return caml_call4(Stdlib_format[125],ppf,_b_,_dW_,_dV_)}
    caml_call3
     (CamlinternalMod[2],
      _c_,
      C,
      [0,
       create$2,
       const$0,
       eq,
       set_eq,
       with_eq,
       stamp,
       set_stamp,
       srcs,
       srcs_changed,
       set_srcs,
       set_srcs_changed,
       value,
       value_changed,
       set_value,
       update,
       set_update,
       src_update,
       up_to_date_value,
       create_instant,
       reset_instant,
       set_instant,
       delay,
       fix,
       defer,
       dump_src_ids]);
    function const$1(v){return [0,0,function(param){return v}]}
    function obs_cell(c)
     {return [0,[0,[0,c],0],function(param){return caml_call1(C[12],c)}]}
    function app(param,_dQ_)
     {var v=_dQ_[2],vcs=_dQ_[1],f=param[2],fcs=param[1];
      function _dR_(param)
       {var _dS_=caml_call1(v,0);return caml_call1(caml_call1(f,0),_dS_)}
      return [0,caml_call2(Stdlib_list[12],fcs,vcs),_dR_]}
    function update_srcs(l)
     {function add_cell(acc,param)
       {var c=param[1],_dP_=caml_call1(C[8],c);
        return caml_call2(Srcs[7],acc,_dP_)}
      var
       new_srcs=caml_call3(Stdlib_list[23],add_cell,Srcs[1],l[3]),
       rems=caml_call2(Srcs[10],l[2],new_srcs),
       adds=caml_call2(Srcs[10],new_srcs,l[2]),
       _dN_=caml_call1(Src[7],l);
      caml_call2(Srcs[14],_dN_,rems);
      var _dO_=caml_call1(Src[6],l);
      caml_call2(Srcs[14],_dO_,adds);
      l[2] = new_srcs;
      return 0}
    function update$0(step,l)
     {var _dL_=step !== nil?1:0,_dM_=_dL_?step !== l[1]?1:0:_dL_;
      if(_dM_)
       {l[1] = step;
        var srcs_changed=0,value_changed=0,param=l[3];
        for(;;)
         {if(param)
           {var cs=param[2],match=param[1],c=match[1];
            caml_call2(C[15],step,c);
            var
             value_changed$0=value_changed || caml_call1(C[13],c),
             srcs_changed$0=srcs_changed || caml_call1(C[9],c),
             srcs_changed=srcs_changed$0,
             value_changed=value_changed$0,
             param=cs;
            continue}
          if(srcs_changed)update_srcs(l);
          return value_changed?caml_call1(l[4],0):value_changed}}
      return _dM_}
    function force(l)
     {var step=caml_call2(Src[9],nil,l[2]);
      update$0(step,l);
      return caml_call1(l[4],0)}
    function create$3(opt,param)
     {var log=param[2],cells=param[1];
      if(opt)var sth=opt[1],now=sth;else var now=1;
      var l=[0,nil,Srcs[1],cells,log];
      update_srcs(l);
      if(now)force(l);
      return l}
    function for_cell(now,c,log)
     {return create$3
              (now,
               [0,
                [0,[0,c],0],
                function(param){return caml_call1(log,caml_call1(C[12],c))}])}
    function destroy(l)
     {var _dJ_=l[2],_dK_=caml_call1(Src[7],l);
      return caml_call2(Srcs[14],_dK_,_dJ_)}
    var held=[0,0];
    function hold(l){held[1] = [0,l,held[1]];return 0}
    function may_hold(param){if(param){var l=param[1];return hold(l)}return 0}
    function unhold_all(param)
     {caml_call2(Stdlib_list[15],destroy,held[1]);held[1] = 0;return 0}
    caml_call3
     (CamlinternalMod[2],
      _d_,
      Logr,
      [0,
       const$1,
       obs_cell,
       app,
       app,
       create$3,
       for_cell,
       force,
       destroy,
       update$0,
       hold,
       may_hold,
       unhold_all]);
    var _e_=Logr[2];
    function log(now,e,f)
     {function wrap(param)
       {if(param){var v=param[1];return caml_call1(f,v)}return 0}
      return [0,caml_call3(Logr[6],now,e,wrap)]}
    function create$4(param)
     {var src=caml_call2(Src[10],0,0);
      function send(step,v)
       {if(step)
         var step$0=step[1],exec=0,step$1=step$0;
        else
         var step$2=create$0(0),exec=1,step$1=step$2;
        var _dH_=caml_call1(Src[3],src);
        caml_call2(C[7],_dH_,step$1);
        var _dI_=caml_call1(Src[3],src);
        caml_call3(C[21],step$1,_dI_,[0,v]);
        add_src(step$1,caml_call1(Src[4],src));
        return exec?execute(step$1):exec}
      return [0,caml_call1(Src[3],src),send]}
    var _f_=C[18],never=caml_call2(C[2],0,0);
    function bind(e,f)
     {var _dt_=caml_call1(C[8],e),step=caml_call2(Src[9],nil,_dt_);
      caml_call2(C[15],step,e);
      var match=caml_call1(C[12],e);
      if(match)
       var curr=match[1],current=caml_call1(f,curr);
      else
       var current=never;
      var current$0=[0,current];
      function update(step,self)
       {caml_call2(C[15],step,e);
        var match=caml_call1(C[12],e);
        if(match)
         {var curr=match[1];
          current$0[1] = caml_call1(f,curr);
          caml_call2(C[15],step,current$0[1]);
          var
           _dx_=caml_call1(C[8],current$0[1]),
           _dy_=caml_call1(C[8],e),
           _dz_=caml_call2(Srcs[7],_dy_,_dx_);
          caml_call2(C[10],self,_dz_);
          var _dA_=caml_call1(C[12],current$0[1]);
          return caml_call3(C[21],step,self,_dA_)}
        caml_call2(C[15],step,current$0[1]);
        var
         _dB_=caml_call1(C[9],e),
         _dC_=_dB_ || caml_call1(C[9],current$0[1]);
        if(_dC_)
         {var
           _dD_=caml_call1(C[8],current$0[1]),
           _dE_=caml_call1(C[8],e),
           _dF_=caml_call2(Srcs[7],_dE_,_dD_);
          caml_call2(C[10],self,_dF_)}
        var _dG_=caml_call1(C[12],current$0[1]);
        return caml_call3(C[21],step,self,_dG_)}
      var
       _du_=caml_call1(C[8],current$0[1]),
       step$0=caml_call2(Src[9],step,_du_);
      caml_call2(C[15],step$0,current$0[1]);
      var
       _dv_=caml_call1(C[8],current$0[1]),
       _dw_=caml_call1(C[8],e),
       srcs=caml_call2(Srcs[7],_dw_,_dv_),
       init=caml_call1(C[12],current$0[1]);
      return caml_call4(C[19],step$0,srcs,init,update)}
    function join(ee){return bind(ee,function(e){return e})}
    function swap(es)
     {var _dg_=caml_call1(C[8],es),step=caml_call2(Src[9],nil,_dg_);
      caml_call2(C[15],step,es);
      var current=[0,caml_call1(C[12],es)];
      function update(step,self)
       {caml_call2(C[15],step,es);
        var match=caml_call1(C[13],es);
        if(match)
         {current[1] = caml_call1(C[12],es);
          caml_call2(C[15],step,current[1]);
          var
           _dk_=caml_call1(C[8],current[1]),
           _dl_=caml_call1(C[8],es),
           _dm_=caml_call2(Srcs[7],_dl_,_dk_);
          caml_call2(C[10],self,_dm_)}
        else
         {caml_call2(C[15],step,current[1]);
          var
           _do_=caml_call1(C[9],es),
           _dp_=_do_ || caml_call1(C[9],current[1]);
          if(_dp_)
           {var
             _dq_=caml_call1(C[8],current[1]),
             _dr_=caml_call1(C[8],es),
             _ds_=caml_call2(Srcs[7],_dr_,_dq_);
            caml_call2(C[10],self,_ds_)}}
        var _dn_=caml_call1(C[12],current[1]);
        return caml_call3(C[21],step,self,_dn_)}
      var
       _dh_=caml_call1(C[8],current[1]),
       step$0=caml_call2(Src[9],step,_dh_);
      caml_call2(C[15],step$0,current[1]);
      var
       _di_=caml_call1(C[8],current[1]),
       _dj_=caml_call1(C[8],es),
       srcs=caml_call2(Srcs[7],_dj_,_di_),
       init=caml_call1(C[12],current[1]);
      return caml_call4(C[19],step$0,srcs,init,update)}
    function map(f,e)
     {function map(f,param)
       {if(param){var v=param[1];return [0,caml_call1(f,v)]}return 0}
      function update(step,self)
       {caml_call2(C[15],step,e);
        if(caml_call1(C[9],e))
         {var _de_=caml_call1(C[8],e);caml_call2(C[10],self,_de_)}
        var _df_=map(f,caml_call1(C[12],e));
        return caml_call3(C[21],step,self,_df_)}
      var _db_=caml_call1(C[8],e),step=caml_call2(Src[9],nil,_db_);
      caml_call2(C[15],step,e);
      var _dc_=map(f,caml_call1(C[12],e)),_dd_=caml_call1(C[8],e);
      return caml_call4(C[19],step,_dd_,_dc_,update)}
    function stamp$0(e,v)
     {function stamp(param){return param?[0,v]:0}
      function update(step,self)
       {caml_call2(C[15],step,e);
        if(caml_call1(C[9],e))
         {var _c$_=caml_call1(C[8],e);caml_call2(C[10],self,_c$_)}
        var _da_=stamp(caml_call1(C[12],e));
        return caml_call3(C[21],step,self,_da_)}
      var _c9_=caml_call1(C[8],e),step=caml_call2(Src[9],nil,_c9_);
      caml_call2(C[15],step,e);
      var init=stamp(caml_call1(C[12],e)),_c__=caml_call1(C[8],e);
      return caml_call4(C[19],step,_c__,init,update)}
    function filter(f,e)
     {function filter(f,occ)
       {if(occ){var v=occ[1];return caml_call1(f,v)?occ:0}return 0}
      function update(step,self)
       {caml_call2(C[15],step,e);
        if(caml_call1(C[9],e))
         {var _c7_=caml_call1(C[8],e);caml_call2(C[10],self,_c7_)}
        var _c8_=filter(f,caml_call1(C[12],e));
        return caml_call3(C[21],step,self,_c8_)}
      var _c5_=caml_call1(C[8],e),step=caml_call2(Src[9],nil,_c5_);
      caml_call2(C[15],step,e);
      var init=filter(f,caml_call1(C[12],e)),_c6_=caml_call1(C[8],e);
      return caml_call4(C[19],step,_c6_,init,update)}
    function filter_map(f,e)
     {function filter_map(f,param)
       {if(param){var v=param[1];return caml_call1(f,v)}return 0}
      function update(step,self)
       {caml_call2(C[15],step,e);
        if(caml_call1(C[9],e))
         {var _c3_=caml_call1(C[8],e);caml_call2(C[10],self,_c3_)}
        var _c4_=filter_map(f,caml_call1(C[12],e));
        return caml_call3(C[21],step,self,_c4_)}
      var _c1_=caml_call1(C[8],e),step=caml_call2(Src[9],nil,_c1_);
      caml_call2(C[15],step,e);
      var init=filter_map(f,caml_call1(C[12],e)),_c2_=caml_call1(C[8],e);
      return caml_call4(C[19],step,_c2_,init,update)}
    function select(es)
     {function add_srcs(acc,e)
       {var _c0_=caml_call1(C[8],e);return caml_call2(Srcs[7],acc,_c0_)}
      function or_srcs_changed(acc,e){return acc?acc:caml_call1(C[9],e)}
      function update(step,self)
       {var _cW_=caml_call1(C[15],step);
        caml_call2(Stdlib_list[15],_cW_,es);
        var srcs_changed=caml_call3(Stdlib_list[23],or_srcs_changed,0,es);
        if(srcs_changed)
         {var _cX_=caml_call3(Stdlib_list[23],add_srcs,Srcs[1],es);
          caml_call2(C[10],self,_cX_)}
        try
         {var
           switch$0=0,
           _cY_=function(e){return 0 !== caml_call1(C[12],e)?1:0},
           e=caml_call2(Stdlib_list[36],_cY_,es);
          switch$0 = 1}
        catch(_cZ_)
         {_cZ_ = caml_wrap_exception(_cZ_);
          if(_cZ_ !== Stdlib[8])throw _cZ_;
          var v=0}
        if(switch$0)var v=caml_call1(C[12],e);
        return caml_call3(C[21],step,self,v)}
      function find_step(step,e)
       {var _cV_=caml_call1(C[8],e);return caml_call2(Src[9],step,_cV_)}
      var
       step=caml_call3(Stdlib_list[23],find_step,nil,es),
       _cS_=caml_call1(C[15],step);
      caml_call2(Stdlib_list[15],_cS_,es);
      try
       {var
         switch$0=0,
         _cT_=function(e){return 0 !== caml_call1(C[12],e)?1:0},
         e=caml_call2(Stdlib_list[36],_cT_,es);
        switch$0 = 1}
      catch(_cU_)
       {_cU_ = caml_wrap_exception(_cU_);
        if(_cU_ !== Stdlib[8])throw _cU_;
        var init=0}
      if(switch$0)var init=caml_call1(C[12],e);
      var srcs=caml_call3(Stdlib_list[23],add_srcs,Srcs[1],es);
      return caml_call4(C[19],step,srcs,init,update)}
    function accum(acc,e)
     {var acc$0=[0,acc];
      function accum(param)
       {if(param)
         {var f=param[1];
          acc$0[1] = caml_call1(f,acc$0[1]);
          return [0,acc$0[1]]}
        return 0}
      function update(step,self)
       {caml_call2(C[15],step,e);
        if(caml_call1(C[9],e))
         {var _cQ_=caml_call1(C[8],e);caml_call2(C[10],self,_cQ_)}
        var _cR_=accum(caml_call1(C[12],e));
        return caml_call3(C[21],step,self,_cR_)}
      var _cO_=caml_call1(C[8],e),step=caml_call2(Src[9],nil,_cO_);
      caml_call2(C[15],step,e);
      var init=accum(caml_call1(C[12],e)),_cP_=caml_call1(C[8],e);
      return caml_call4(C[19],step,_cP_,init,update)}
    function until(opt,next,e)
     {if(opt)var sth=opt[1],limit=sth;else var limit=0;
      function nop(step,self){return 0}
      function update(step,self)
       {caml_call2(C[15],step,next);
        caml_call2(C[15],step,e);
        var match=caml_call1(C[12],next);
        if(match)
         {caml_call2(C[10],self,Srcs[1]);
          caml_call2(C[16],self,nop);
          var _cH_=limit?caml_call1(C[12],e):0;
          return caml_call3(C[21],step,self,_cH_)}
        var _cI_=caml_call1(C[9],next),_cJ_=_cI_ || caml_call1(C[9],e);
        if(_cJ_)
         {var
           _cK_=caml_call1(C[8],e),
           _cL_=caml_call1(C[8],next),
           _cM_=caml_call2(Srcs[7],_cL_,_cK_);
          caml_call2(C[10],self,_cM_)}
        var _cN_=caml_call1(C[12],e);
        return caml_call3(C[21],step,self,_cN_)}
      var
       _cC_=caml_call1(C[8],next),
       step=caml_call2(Src[9],nil,_cC_),
       _cD_=caml_call1(C[8],e),
       step$0=caml_call2(Src[9],step,_cD_);
      caml_call2(C[15],step$0,next);
      caml_call2(C[15],step$0,e);
      var match=caml_call1(C[12],next);
      if(match)
       {var init=limit?caml_call1(C[12],e):0;
        return caml_call4(C[19],step$0,Srcs[1],init,nop)}
      var
       _cE_=caml_call1(C[8],e),
       _cF_=caml_call1(C[8],next),
       srcs=caml_call2(Srcs[7],_cF_,_cE_),
       _cG_=caml_call1(C[12],e);
      return caml_call4(C[19],step$0,srcs,_cG_,update)}
    function follow(e,on)
     {function deps_srcs(e,on)
       {var _cA_=caml_call1(C[8],on),_cB_=caml_call1(C[8],e);
        return caml_call2(Srcs[7],_cB_,_cA_)}
      function update_deps(step,e,on)
       {caml_call2(C[15],step,e);return caml_call2(C[15],step,on)}
      function follow(o,on){if(o && on)return o;return 0}
      function update(step,self)
       {update_deps(step,e,on);
        var _cv_=caml_call1(C[9],e),_cw_=_cv_ || caml_call1(C[9],on);
        if(_cw_){var _cx_=deps_srcs(e,on);caml_call2(C[10],self,_cx_)}
        var _cy_=caml_call1(C[12],on),_cz_=follow(caml_call1(C[12],e),_cy_);
        return caml_call3(C[21],step,self,_cz_)}
      var
       _cr_=caml_call1(C[8],e),
       step=caml_call2(Src[9],nil,_cr_),
       _cs_=caml_call1(C[8],on),
       step$0=caml_call2(Src[9],step,_cs_);
      update_deps(step$0,e,on);
      var
       _ct_=caml_call1(C[12],on),
       init=follow(caml_call1(C[12],e),_ct_),
       _cu_=deps_srcs(e,on);
      return caml_call4(C[19],step$0,_cu_,init,update)}
    function defer$0(e){return caml_call2(C[24],0,e)}
    function fix$0(ef){return caml_call3(C[23],0,0,ef)}
    function on_some(e){return filter_map(function(x){return x},e)}
    function some(e){return map(function(v){return [0,v]},e)}
    function value$0(e,default$0)
     {function update(step,self)
       {caml_call2(C[15],step,e);
        if(caml_call1(C[9],e))
         {var _cp_=caml_call1(C[8],e);caml_call2(C[10],self,_cp_)}
        var match=caml_call1(C[12],e);
        if(match)
         var
          _cq_=match[1],
          v=
           _cq_
           ||
           (caml_call2(C[15],step,default$0),[0,caml_call1(C[12],default$0)]),
          occ=v;
        else
         var occ=0;
        return caml_call3(C[21],step,self,occ)}
      var _cm_=caml_call1(C[8],e),step=caml_call2(Src[9],nil,_cm_);
      caml_call2(C[15],step,e);
      caml_call2(C[15],step,default$0);
      var match=caml_call1(C[12],e);
      if(match)
       var _cn_=match[1],v=_cn_ || [0,caml_call1(C[12],default$0)],init=v;
      else
       var init=0;
      var _co_=caml_call1(C[8],e);
      return caml_call4(C[19],step,_co_,init,update)}
    function get(e)
     {return map
              (function(param)
                {if(param){var v=param[1];return v}
                 return caml_call1(Stdlib[1],cst_option_is_None)},
               e)}
    function bind$0(e,f)
     {return map
              (function(param)
                {if(param){var v=param[1];return caml_call1(f,v)}return 0},
               e)}
    function join$0(e)
     {return map
              (function(param)
                {if(param){var _cl_=param[1];if(_cl_)return _cl_}return 0},
               e)}
    function is_none(e){return map(function(param){return param?0:1},e)}
    function is_some(e){return map(function(param){return param?1:0},e)}
    function map$0(f,e)
     {return map
              (function(param)
                {if(param){var v=param[1];return [0,caml_call1(f,v)]}return 0},
               e)}
    function fst(e){return map(function(_ck_){return _ck_[1]},e)}
    function snd(e){return map(function(_cj_){return _cj_[2]},e)}
    function v(e0,e1)
     {function update(step,self)
       {caml_call2(C[15],step,e0);
        caml_call2(C[15],step,e1);
        var _ce_=caml_call1(C[9],e0),_cf_=_ce_ || caml_call1(C[9],e1);
        if(_cf_)
         {var
           _cg_=caml_call1(C[8],e1),
           _ch_=caml_call1(C[8],e0),
           _ci_=caml_call2(Srcs[7],_ch_,_cg_);
          caml_call2(C[10],self,_ci_)}
        var
         match=caml_call1(C[12],e0),
         match$0=caml_call1(C[12],e1),
         switch$0=0;
        if(match && match$0)
         {var v1=match$0[1],v0=match[1],occ=[0,[0,v0,v1]];switch$0 = 1}
        if(! switch$0)var occ=0;
        return caml_call3(C[21],step,self,occ)}
      var
       _ca_=caml_call1(C[8],e0),
       step=caml_call2(Src[9],nil,_ca_),
       _cb_=caml_call1(C[8],e1),
       step$0=caml_call2(Src[9],step,_cb_),
       _cc_=caml_call1(C[8],e1),
       _cd_=caml_call1(C[8],e0),
       srcs=caml_call2(Srcs[7],_cd_,_cc_),
       match=caml_call1(C[12],e0),
       match$0=caml_call1(C[12],e1),
       switch$0=0;
      if(match && match$0)
       {var v1=match$0[1],v0=match[1],init=[0,[0,v0,v1]];switch$0 = 1}
      if(! switch$0)var init=0;
      return caml_call4(C[19],step$0,srcs,init,update)}
    var
     Pair=[0,fst,snd,v],
     dump_src_ids$0=C[25],
     _i_=C[3],
     _g_=Logr[6],
     _h_=Logr[2],
     _j_=C[5];
    function create$5(eq,v)
     {var src=caml_call2(Src[10],eq,v);
      function set(step,v)
       {if(step)
         var step$0=step[1],exec=0,step$1=step$0;
        else
         var step$2=create$0(0),exec=1,step$1=step$2;
        var cell=caml_call1(Src[3],src);
        if(caml_call3(C[17],step$1,cell,v))
         add_src(step$1,caml_call1(Src[4],src));
        return exec?execute(step$1):exec}
      return [0,caml_call1(Src[3],src),set]}
    var _m_=C[2],_k_=C[18],_l_=C[12];
    function bind$1(v,f)
     {var _bV_=caml_call1(C[8],v),step=caml_call2(Src[9],nil,_bV_);
      caml_call2(C[15],step,v);
      var current=[0,caml_call1(f,caml_call1(C[12],v))];
      function update(step,self)
       {caml_call2(C[15],step,v);
        var match=caml_call1(C[13],v);
        if(match)
         {current[1] = caml_call1(f,caml_call1(C[12],v));
          caml_call2(C[15],step,current[1]);
          var _b0_=caml_call1(C[3],current[1]);
          caml_call2(C[4],self,_b0_);
          var
           _b1_=caml_call1(C[8],current[1]),
           _b2_=caml_call1(C[8],v),
           _b3_=caml_call2(Srcs[7],_b2_,_b1_);
          caml_call2(C[10],self,_b3_);
          var _b4_=caml_call1(C[12],current[1]);
          return caml_call2(C[14],self,_b4_)}
        caml_call2(C[15],step,current[1]);
        var _b5_=caml_call1(C[9],v),_b6_=_b5_ || caml_call1(C[9],current[1]);
        if(_b6_)
         {var
           _b7_=caml_call1(C[8],current[1]),
           _b8_=caml_call1(C[8],v),
           _b9_=caml_call2(Srcs[7],_b8_,_b7_);
          caml_call2(C[10],self,_b9_)}
        var _b__=caml_call1(C[13],current[1]);
        if(_b__)
         {var _b$_=caml_call1(C[12],current[1]);
          return caml_call2(C[14],self,_b$_)}
        return _b__}
      var
       _bW_=caml_call1(C[8],current[1]),
       step$0=caml_call2(Src[9],step,_bW_);
      caml_call2(C[15],step$0,current[1]);
      var
       _bX_=caml_call1(C[8],current[1]),
       _bY_=caml_call1(C[8],v),
       srcs=caml_call2(Srcs[7],_bY_,_bX_),
       init=caml_call1(C[12],current[1]),
       _bZ_=[0,caml_call1(C[3],current[1])];
      return caml_call5(C[1],_bZ_,step$0,srcs,init,update)}
    function hold$0(eq,i,e)
     {function update(step,self)
       {caml_call2(C[15],step,e);
        if(caml_call1(C[9],e))
         {var _bU_=caml_call1(C[8],e);caml_call2(C[10],self,_bU_)}
        var match=caml_call1(C[12],e);
        if(match){var v=match[1];return caml_call2(C[14],self,v)}
        return 0}
      var _bS_=caml_call1(C[8],e),step=caml_call2(Src[9],nil,_bS_);
      caml_call2(C[15],step,e);
      var match=caml_call1(C[12],e);
      if(match)var v=match[1],init=v;else var init=i;
      var _bT_=caml_call1(C[8],e);
      return caml_call5(C[1],eq,step,_bT_,init,update)}
    function join$1(ss){return bind$1(ss,function(s){return s})}
    function swap$0(s,se)
     {return join$1
              (hold$0([0,function(_bR_,_bQ_){return _bR_ === _bQ_?1:0}],s,se))}
    function changes(s)
     {function update(step,self)
       {caml_call2(C[15],step,s);
        if(caml_call1(C[9],s))
         {var _bN_=caml_call1(C[8],s);caml_call2(C[10],self,_bN_)}
        var _bO_=caml_call1(C[13],s);
        if(_bO_)
         {var _bP_=[0,caml_call1(C[12],s)];
          return caml_call3(C[21],step,self,_bP_)}
        return _bO_}
      var _bL_=caml_call1(C[8],s),step=caml_call2(Src[9],nil,_bL_);
      caml_call2(C[15],step,s);
      var _bM_=caml_call1(C[8],s);
      return caml_call4(C[19],step,_bM_,0,update)}
    function sample(s,on,f)
     {function update(step,self)
       {caml_call2(C[15],step,on);
        caml_call2(C[15],step,s);
        var _bF_=caml_call1(C[9],on),_bG_=_bF_ || caml_call1(C[9],s);
        if(_bG_)
         {var
           _bH_=caml_call1(C[8],on),
           _bI_=caml_call1(C[8],s),
           _bJ_=caml_call2(Srcs[7],_bI_,_bH_);
          caml_call2(C[10],self,_bJ_)}
        var match=caml_call1(C[12],on);
        if(match)
         {var v=match[1],_bK_=[0,caml_call2(f,caml_call1(C[12],s),v)];
          return caml_call3(C[21],step,self,_bK_)}
        return 0}
      var
       _bB_=caml_call1(C[8],s),
       step=caml_call2(Src[9],nil,_bB_),
       _bC_=caml_call1(C[8],on),
       step$0=caml_call2(Src[9],step,_bC_);
      caml_call2(C[15],step$0,on);
      caml_call2(C[15],step$0,s);
      var
       _bD_=caml_call1(C[8],on),
       _bE_=caml_call1(C[8],s),
       srcs=caml_call2(Srcs[7],_bE_,_bD_),
       match=caml_call1(C[12],on);
      if(match)
       var v=match[1],init=[0,caml_call2(f,caml_call1(C[12],s),v)];
      else
       var init=0;
      return caml_call4(C[19],step$0,srcs,init,update)}
    function sample_filter(s,on,f){return on_some(sample(s,on,f))}
    function snapshot(s,on){return sample(s,on,function(v,param){return v})}
    function map$1(eq,f,v)
     {function update(step,self)
       {caml_call2(C[15],step,v);
        if(caml_call1(C[9],v))
         {var _by_=caml_call1(C[8],v);caml_call2(C[10],self,_by_)}
        var _bz_=caml_call1(C[13],v);
        if(_bz_)
         {var _bA_=caml_call1(f,caml_call1(C[12],v));
          return caml_call2(C[14],self,_bA_)}
        return _bz_}
      var _bv_=caml_call1(C[8],v),step=caml_call2(Src[9],nil,_bv_);
      caml_call2(C[15],step,v);
      var _bw_=caml_call1(f,caml_call1(C[12],v)),_bx_=caml_call1(C[8],v);
      return caml_call5(C[1],eq,step,_bx_,_bw_,update)}
    function app$0(eq,f,v)
     {function update(step,self)
       {caml_call2(C[15],step,f);
        caml_call2(C[15],step,v);
        var _bm_=caml_call1(C[9],f),_bn_=_bm_ || caml_call1(C[9],v);
        if(_bn_)
         {var
           _bo_=caml_call1(C[8],v),
           _bp_=caml_call1(C[8],f),
           _bq_=caml_call2(Srcs[7],_bp_,_bo_);
          caml_call2(C[10],self,_bq_)}
        var _br_=caml_call1(C[13],f),_bs_=_br_ || caml_call1(C[13],v);
        if(_bs_)
         {var
           _bt_=caml_call1(C[12],v),
           _bu_=caml_call1(caml_call1(C[12],f),_bt_);
          return caml_call2(C[14],self,_bu_)}
        return _bs_}
      var
       _bh_=caml_call1(C[8],f),
       step=caml_call2(Src[9],nil,_bh_),
       _bi_=caml_call1(C[8],v),
       step$0=caml_call2(Src[9],step,_bi_);
      caml_call2(C[15],step$0,f);
      caml_call2(C[15],step$0,v);
      var
       _bj_=caml_call1(C[8],v),
       _bk_=caml_call1(C[8],f),
       srcs=caml_call2(Srcs[7],_bk_,_bj_),
       _bl_=caml_call1(C[12],v),
       init=caml_call1(caml_call1(C[12],f),_bl_);
      return caml_call5(C[1],eq,step$0,srcs,init,update)}
    function accum$0(eq,i,e){return hold$0(eq,i,accum(i,e))}
    function until$0(opt,init,next,s)
     {if(opt)var sth=opt[1],limit=sth;else var limit=0;
      function nop(step,self){return 0}
      function update(step,self)
       {caml_call2(C[15],step,next);
        caml_call2(C[15],step,s);
        var match=caml_call1(C[12],next);
        if(match)
         {caml_call2(C[10],self,Srcs[1]);
          caml_call2(C[16],self,nop);
          if(limit)
           {var _ba_=caml_call1(C[12],s);return caml_call2(C[14],self,_ba_)}
          return 0}
        var _bb_=caml_call1(C[9],next),_bc_=_bb_ || caml_call1(C[9],s);
        if(_bc_)
         {var
           _bd_=caml_call1(C[8],s),
           _be_=caml_call1(C[8],next),
           _bf_=caml_call2(Srcs[7],_be_,_bd_);
          caml_call2(C[10],self,_bf_)}
        var _bg_=caml_call1(C[12],s);
        return caml_call2(C[14],self,_bg_)}
      var
       _a4_=caml_call1(C[8],next),
       step=caml_call2(Src[9],nil,_a4_),
       _a5_=caml_call1(C[8],s),
       step$0=caml_call2(Src[9],step,_a5_);
      caml_call2(C[15],step$0,next);
      caml_call2(C[15],step$0,s);
      var match=caml_call1(C[12],next);
      if(match)
       {if(init)var i=init[1],init$0=i;else var init$0=caml_call1(C[12],s);
        var _a6_=Srcs[1],_a7_=[0,caml_call1(_i_,s)];
        return caml_call5(C[1],_a7_,step$0,_a6_,init$0,nop)}
      var
       _a8_=caml_call1(C[8],s),
       _a9_=caml_call1(C[8],next),
       srcs=caml_call2(Srcs[7],_a9_,_a8_),
       _a__=caml_call1(C[12],s),
       _a$_=[0,caml_call1(_i_,s)];
      return caml_call5(C[1],_a$_,step$0,srcs,_a__,update)}
    function follow$0(init,s,on)
     {function deps_srcs(s,on)
       {var _a2_=caml_call1(C[8],on),_a3_=caml_call1(C[8],s);
        return caml_call2(Srcs[7],_a3_,_a2_)}
      function update_deps(step,s,on)
       {caml_call2(C[15],step,s);return caml_call2(C[15],step,on)}
      function update(step,self)
       {update_deps(step,s,on);
        var _aX_=caml_call1(C[9],s),_aY_=_aX_ || caml_call1(C[9],on);
        if(_aY_){var _aZ_=deps_srcs(s,on);caml_call2(C[10],self,_aZ_)}
        var _a0_=caml_call1(C[12],on);
        if(_a0_)
         {var _a1_=caml_call1(C[12],s);return caml_call2(C[14],self,_a1_)}
        return _a0_}
      var
       _aT_=caml_call1(C[8],s),
       step=caml_call2(Src[9],nil,_aT_),
       _aU_=caml_call1(C[8],on),
       step$0=caml_call2(Src[9],step,_aU_);
      update_deps(step$0,s,on);
      if(init)var i=init[1],init$0=i;else var init$0=caml_call1(C[12],s);
      var _aV_=deps_srcs(s,on),_aW_=[0,caml_call1(_i_,s)];
      return caml_call5(C[1],_aW_,step$0,_aV_,init$0,update)}
    var _n_=C[22];
    function defer$1(init,s)
     {if(init)
       var init$0=init[1],init$1=init$0;
      else
       {var _aS_=caml_call1(C[8],s),step=caml_call2(Src[9],nil,_aS_);
        caml_call2(C[15],step,s);
        var init$1=caml_call1(C[12],s)}
      return caml_call2(C[24],init$1,s)}
    var _o_=C[23];
    function l1(eq,f,x){return map$1(eq,f,x)}
    function l2(eq,f,x,y)
     {function update(step,self)
       {caml_call2(C[15],step,x);
        caml_call2(C[15],step,y);
        var _aJ_=caml_call1(C[9],x),_aK_=_aJ_ || caml_call1(C[9],y);
        if(_aK_)
         {var
           _aL_=caml_call1(C[8],y),
           _aM_=caml_call1(C[8],x),
           _aN_=caml_call2(Srcs[7],_aM_,_aL_);
          caml_call2(C[10],self,_aN_)}
        var _aO_=caml_call1(C[13],x),_aP_=_aO_ || caml_call1(C[13],y);
        if(_aP_)
         {var
           _aQ_=caml_call1(C[12],y),
           _aR_=caml_call2(f,caml_call1(C[12],x),_aQ_);
          return caml_call2(C[14],self,_aR_)}
        return _aP_}
      var
       _aE_=caml_call1(C[8],x),
       step=caml_call2(Src[9],nil,_aE_),
       _aF_=caml_call1(C[8],y),
       step$0=caml_call2(Src[9],step,_aF_);
      caml_call2(C[15],step$0,x);
      caml_call2(C[15],step$0,y);
      var
       _aG_=caml_call1(C[8],y),
       _aH_=caml_call1(C[8],x),
       srcs=caml_call2(Srcs[7],_aH_,_aG_),
       _aI_=caml_call1(C[12],y),
       init=caml_call2(f,caml_call1(C[12],x),_aI_);
      return caml_call5(C[1],eq,step$0,srcs,init,update)}
    function l3(eq,f,x,y,z)
     {function srcs_union(x,y,z)
       {var
         _aA_=caml_call1(C[8],z),
         _aB_=caml_call1(C[8],y),
         _aC_=caml_call2(Srcs[7],_aB_,_aA_),
         _aD_=caml_call1(C[8],x);
        return caml_call2(Srcs[7],_aD_,_aC_)}
      function update(step,self)
       {caml_call2(C[15],step,x);
        caml_call2(C[15],step,y);
        caml_call2(C[15],step,z);
        var _aq_=caml_call1(C[9],x);
        if(_aq_)
         var _ar_=_aq_;
        else
         var _az_=caml_call1(C[9],y),_ar_=_az_ || caml_call1(C[9],z);
        if(_ar_){var _as_=srcs_union(x,y,z);caml_call2(C[10],self,_as_)}
        var _at_=caml_call1(C[13],x);
        if(_at_)
         var _au_=_at_;
        else
         var _ay_=caml_call1(C[13],y),_au_=_ay_ || caml_call1(C[13],z);
        if(_au_)
         {var
           _av_=caml_call1(C[12],z),
           _aw_=caml_call1(C[12],y),
           _ax_=caml_call3(f,caml_call1(C[12],x),_aw_,_av_);
          return caml_call2(C[14],self,_ax_)}
        return _au_}
      var
       _al_=caml_call1(C[8],x),
       step=caml_call2(Src[9],nil,_al_),
       _am_=caml_call1(C[8],y),
       step$0=caml_call2(Src[9],step,_am_),
       _an_=caml_call1(C[8],z),
       step$1=caml_call2(Src[9],step$0,_an_);
      caml_call2(C[15],step$1,x);
      caml_call2(C[15],step$1,y);
      caml_call2(C[15],step$1,z);
      var
       srcs=srcs_union(x,y,z),
       _ao_=caml_call1(C[12],z),
       _ap_=caml_call1(C[12],y),
       init=caml_call3(f,caml_call1(C[12],x),_ap_,_ao_);
      return caml_call5(C[1],eq,step$1,srcs,init,update)}
    function eq$0(_ak_,_aj_){return _ak_ === _aj_?1:0}
    var false$0=caml_call2(_m_,0,0),true$0=caml_call2(_m_,0,1);
    function not(s){return map$1([0,eq$0],function(_ai_){return 1 - _ai_},s)}
    function _p_(_ag_,_af_){var _ah_=_ag_?_af_:_ag_;return _ah_}
    var _q_=0;
    function symbol(_ad_,_ae_){return l2(_q_,_p_,_ad_,_ae_)}
    function _r_(_ab_,_aa_){var _ac_=_ab_ || _aa_;return _ac_}
    var _s_=0;
    function symbol$0(___,_$_){return l2(_s_,_r_,___,_$_)}
    function edge(s){return changes(s)}
    function edge_detect(edge,s)
     {function update(step,self)
       {caml_call2(C[15],step,s);
        if(caml_call1(C[9],s))
         {var _X_=caml_call1(C[8],s);caml_call2(C[10],self,_X_)}
        var
         _Y_=caml_call1(C[13],s),
         _Z_=_Y_?caml_equal(caml_call1(C[12],s),edge):_Y_;
        return _Z_?caml_call3(C[21],step,self,_t_):_Z_}
      var _V_=caml_call1(C[8],s),step=caml_call2(Src[9],nil,_V_);
      caml_call2(C[15],step,s);
      var _W_=caml_call1(C[8],s);
      return caml_call4(C[19],step,_W_,0,update)}
    function rise(s){return edge_detect(1,s)}
    function fall(s){return edge_detect(0,s)}
    function flip(init,e)
     {function update(step,self)
       {caml_call2(C[15],step,e);
        if(caml_call1(C[9],e))
         {var _T_=caml_call1(C[8],e);caml_call2(C[10],self,_T_)}
        var match=caml_call1(C[12],e);
        if(match)
         {var _U_=1 - caml_call1(C[12],self);
          return caml_call2(C[14],self,_U_)}
        return 0}
      var _R_=caml_call1(C[8],e),step=caml_call2(Src[9],nil,_R_);
      caml_call2(C[15],step,e);
      var
       match=caml_call1(C[12],e),
       init$0=match?1 - init:init,
       _S_=caml_call1(C[8],e);
      return caml_call5(C[1],[0,eq$0],step,_S_,init$0,update)}
    function eq$1(eq,v0,v1)
     {if(v0)
       {if(v1){var v1$0=v1[1],v0$0=v0[1];return caml_call2(eq,v0$0,v1$0)}}
      else
       if(! v1)return 1;
      return 0}
    var none=caml_call2(_m_,0,0);
    function some$0(s)
     {function _N_(v){return [0,v]}
      var _O_=caml_call1(_i_,s);
      return map$1([0,function(_P_,_Q_){return eq$1(_O_,_P_,_Q_)}],_N_,s)}
    function hold_value(i,s)
     {function update(step,self)
       {caml_call2(C[15],step,s);
        if(caml_call1(C[9],s))
         {var _M_=caml_call1(C[8],s);caml_call2(C[10],self,_M_)}
        var match=caml_call1(C[12],s);
        if(match){var v=match[1];return caml_call2(C[14],self,v)}
        return 0}
      function eq(v$0,v){return caml_call3(C[3],s,[0,v$0],[0,v])}
      var _K_=caml_call1(C[8],s),step=caml_call2(Src[9],nil,_K_);
      caml_call2(C[15],step,s);
      var match=caml_call1(C[12],s);
      if(match)var v=match[1],init=v;else var init=i;
      var _L_=caml_call1(C[8],s);
      return caml_call5(C[1],[0,eq],step,_L_,init,update)}
    function value$1(s,default$0)
     {function update(step,self)
       {caml_call2(C[15],step,default$0);
        caml_call2(C[15],step,s);
        var _C_=caml_call1(C[9],default$0),_D_=_C_ || caml_call1(C[9],s);
        if(_D_)
         {var
           _E_=caml_call1(C[8],s),
           _F_=caml_call1(C[8],default$0),
           _G_=caml_call2(Srcs[7],_F_,_E_);
          caml_call2(C[10],self,_G_)}
        var _H_=caml_call1(C[13],default$0),_I_=_H_ || caml_call1(C[13],s);
        if(_I_)
         {var match=caml_call1(C[12],s);
          if(match){var v=match[1];return caml_call2(C[14],self,v)}
          var _J_=caml_call1(C[12],default$0);
          return caml_call2(C[14],self,_J_)}
        return _I_}
      var
       _x_=caml_call1(C[8],default$0),
       step=caml_call2(Src[9],nil,_x_),
       _y_=caml_call1(C[8],s),
       step$0=caml_call2(Src[9],step,_y_);
      caml_call2(C[15],step$0,default$0);
      caml_call2(C[15],step$0,s);
      var match=caml_call1(C[12],s);
      if(match)
       var v=match[1],init=v;
      else
       var init=caml_call1(C[12],default$0);
      var
       _z_=caml_call1(C[8],s),
       _A_=caml_call1(C[8],default$0),
       srcs=caml_call2(Srcs[7],_A_,_z_),
       _B_=[0,caml_call1(_i_,default$0)];
      return caml_call5(C[1],_B_,step$0,srcs,init,update)}
    function get$0(eq,s)
     {return map$1
              (eq,
               function(param)
                {if(param){var v=param[1];return v}
                 return caml_call1(Stdlib[1],cst_option_is_None$0)},
               s)}
    function bind$2(eq,s,f)
     {return map$1
              (eq,
               function(param)
                {if(param){var v=param[1];return caml_call1(f,v)}return 0},
               s)}
    function join$2(eq,s)
     {return map$1
              (eq,
               function(param)
                {if(param){var _w_=param[1];if(_w_)return _w_}return 0},
               s)}
    function is_none$0(s)
     {return map$1([0,eq$0],function(param){return param?0:1},s)}
    function is_some$0(s)
     {return map$1([0,eq$0],function(param){return param?1:0},s)}
    function map$2(eq,f,s)
     {return map$1
              (eq,
               function(param)
                {if(param){var v=param[1];return [0,caml_call1(f,v)]}return 0},
               s)}
    function fst$0(eq,s){return map$1(eq,function(_v_){return _v_[1]},s)}
    function snd$0(eq,s){return map$1(eq,function(_u_){return _u_[2]},s)}
    function v$0(s0,s1){return l2(0,function(x,y){return [0,x,y]},s0,s1)}
    var
     Pair$0=[0,fst$0,snd$0,v$0],
     dump_src_ids$1=C[25],
     Note=
      [0,
       [0,create$0,execute],
       [0,
        Logr[1],
        Logr[3],
        Logr[4],
        Logr[5],
        Logr[7],
        Logr[8],
        Logr[10],
        Logr[11],
        Logr[12]],
       [0,
        _e_,
        log,
        create$4,
        _f_,
        never,
        bind,
        join,
        swap,
        map,
        stamp$0,
        filter,
        filter_map,
        select,
        accum,
        until,
        follow,
        defer$0,
        fix$0,
        [0,on_some,some,value$0,get,bind$0,join$0,map$0,is_none,is_some],
        Pair,
        dump_src_ids$0],
       [0,
        _h_,
        _g_,
        create$5,
        _i_,
        _j_,
        _k_,
        _l_,
        _m_,
        hold$0,
        bind$1,
        join$1,
        swap$0,
        changes,
        map$1,
        app$0,
        sample,
        sample_filter,
        snapshot,
        accum$0,
        until$0,
        follow$0,
        defer$1,
        _n_,
        _o_,
        l1,
        l2,
        l3,
        [0,false$0,true$0,not,symbol,symbol$0,edge,rise,fall,flip],
        [0,
         eq$1,
         hold_value,
         none,
         some$0,
         value$1,
         get$0,
         bind$2,
         join$2,
         map$2,
         is_none$0,
         is_some$0],
        Pair$0,
        dump_src_ids$1]];
    runtime.caml_register_global(21,Note,"Note");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJub3RlLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXNDb250ZW50IjpbXX0=
