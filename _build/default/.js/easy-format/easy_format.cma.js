(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_ml_string_length=runtime.caml_ml_string_length,
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
    var
     global_data=runtime.caml_get_global_data(),
     cst$1=caml_string_of_jsbytes(" "),
     cst$2=caml_string_of_jsbytes(" "),
     cst$3=caml_string_of_jsbytes(" "),
     cst$4=caml_string_of_jsbytes(" "),
     cst$5=caml_string_of_jsbytes(" "),
     cst$6=caml_string_of_jsbytes(" "),
     cst$7=caml_string_of_jsbytes(" "),
     cst$8=caml_string_of_jsbytes(" "),
     cst$0=caml_string_of_jsbytes(""),
     cst=caml_string_of_jsbytes(""),
     atom=[0,0],
     list=[0,1,1,0,1,1,1,1,-921200851,2,0,0,0,0,0],
     label=[0,726666127,1,2,0],
     list_true=[0,1,1,1,1,1,1,1,-921200851,2,0,0,0,0,0],
     list_false=[0,0,0,0,0,0,0,0,-921200851,2,0,0,0,0,0],
     label_true=[0,726666127,1,2,0],
     label_false=[0,726666127,0,2,0],
     Stdlib_buffer=global_data.Stdlib__buffer,
     Stdlib_format=global_data.Stdlib__format,
     Stdlib_list=global_data.Stdlib__list,
     Stdlib_printf=global_data.Stdlib__printf,
     Stdlib=global_data.Stdlib,
     Stdlib_string=global_data.Stdlib__string,
     Stdlib_hashtbl=global_data.Stdlib__hashtbl,
     _a_=[0,[2,0,[2,0,0]],caml_string_of_jsbytes("%s%s")],
     _b_=[0,[2,0,0],caml_string_of_jsbytes("%s")];
    function set_escape(fmt,escape)
     {var
       match=caml_call2(Stdlib_format[96],fmt,0),
       flush0=match[2],
       print0=match[1],
       tagf0=caml_call2(Stdlib_format[149],fmt,0),
       is_tag=[0,0];
      function mot(tag){is_tag[1] = 1;return caml_call1(tagf0[1],tag)}
      function mct(tag){is_tag[1] = 1;return caml_call1(tagf0[2],tag)}
      function print(s,p,n)
       {return is_tag[1]
                ?(caml_call3(print0,s,p,n),is_tag[1] = 0,0)
                :caml_call4(escape,print0,s,p,n)}
      var tagf=[0,mot,mct,tagf0[3],tagf0[4]];
      caml_call3(Stdlib_format[94],fmt,print,flush0);
      return caml_call2(Stdlib_format[147],fmt,tagf)}
    function define_styles(fmt,escape$0,l)
     {if(0 !== l)
       {caml_call2(Stdlib_format[82],fmt,1);
        var
         _R_=2 * caml_call1(Stdlib_list[1],l) | 0,
         tbl1=caml_call2(Stdlib_hashtbl[1],0,_R_),
         _S_=2 * caml_call1(Stdlib_list[1],l) | 0,
         tbl2=caml_call2(Stdlib_hashtbl[1],0,_S_),
         _T_=
          function(param)
           {var style=param[2],style_name=param[1];
            caml_call3(Stdlib_hashtbl[5],tbl1,style_name,style[1]);
            return caml_call3(Stdlib_hashtbl[5],tbl2,style_name,style[2])};
        caml_call2(Stdlib_list[15],_T_,l);
        var
         mark_open_tag=
          function(style_name)
           {try
             {var _X_=caml_call2(Stdlib_hashtbl[6],tbl1,style_name);
              return _X_}
            catch(_Y_)
             {_Y_ = caml_wrap_exception(_Y_);
              if(_Y_ === Stdlib[8])return cst;
              throw _Y_}},
         mark_close_tag=
          function(style_name)
           {try
             {var _V_=caml_call2(Stdlib_hashtbl[6],tbl2,style_name);
              return _V_}
            catch(_W_)
             {_W_ = caml_wrap_exception(_W_);
              if(_W_ === Stdlib[8])return cst$0;
              throw _W_}},
         _U_=caml_call2(Stdlib_format[149],fmt,0),
         tagf=[0,mark_open_tag,mark_close_tag,_U_[3],_U_[4]];
        caml_call2(Stdlib_format[147],fmt,tagf)}
      if(typeof escape$0 === "number")return 0;
      if(258914209 <= escape$0[1])
       {var esc=escape$0[2];return set_escape(fmt,esc)}
      var esc$0=escape$0[2];
      function escape(print,s,p,n)
       {var s0=caml_call3(Stdlib_string[4],s,p,n),s1=caml_call1(esc$0,s0);
        return caml_call3(print,s1,0,caml_ml_string_length(s1))}
      return set_escape(fmt,escape)}
    function pp_open_xbox(fmt,p,indent)
     {var _Q_=p[8];
      if(451368025 <= _Q_)
       {if(! (736550845 <= _Q_))return caml_call2(Stdlib_format[7],fmt,indent)}
      else
       if(379096626 <= _Q_)return caml_call2(Stdlib_format[5],fmt,0);
      return caml_call2(Stdlib_format[9],fmt,indent)}
    function extra_box(p,l)
     {var _M_=p[8];
      if(379096626 <= _M_)
       var wrap=922275930 <= _M_?1:0;
      else
       var
        _P_=function(param){return 0 === param[0]?1:0},
        wrap=caml_call2(Stdlib_list[30],_P_,l);
      if(wrap)
       {var _N_=function(fmt){return caml_call2(Stdlib_format[3],fmt,0)};
        return [0,
                function(fmt){return caml_call2(Stdlib_format[11],fmt,0)},
                _N_]}
      function _O_(param){return 0}
      return [0,function(param){return 0},_O_]}
    function open_tag(fmt,param)
     {if(param){var s=param[1];return caml_call2(Stdlib_format[143],fmt,s)}
      return 0}
    function close_tag(fmt,param)
     {return param?caml_call2(Stdlib_format[145],fmt,0):0}
    function tag_string(fmt,o,s)
     {if(o)
       {var tag=o[1];
        caml_call2(Stdlib_format[143],fmt,tag);
        caml_call2(Stdlib_format[13],fmt,s);
        return caml_call2(Stdlib_format[145],fmt,0)}
      return caml_call2(Stdlib_format[13],fmt,s)}
    function fprint_opt_label(fmt,param)
     {if(param)
       {var match=param[1],lp=match[2],lab=match[1];
        open_tag(fmt,lp[4]);
        fprint_t(fmt,lab);
        close_tag(fmt,lp[4]);
        var _L_=lp[2];
        return _L_?caml_call2(Stdlib_format[13],fmt,cst$3):_L_}
      return 0}
    function fprint_list_body_stick_left(fmt,p,sep,hd,tl)
     {open_tag(fmt,p[12]);
      fprint_t(fmt,hd);
      function _K_(x)
       {if(p[3])caml_call2(Stdlib_format[13],fmt,cst$1);
        tag_string(fmt,p[13],sep);
        if(p[2])
         caml_call2(Stdlib_format[25],fmt,0);
        else
         caml_call2(Stdlib_format[27],fmt,0);
        return fprint_t(fmt,x)}
      caml_call2(Stdlib_list[15],_K_,tl);
      return close_tag(fmt,p[12])}
    function fprint_t(fmt,param)
     {switch(param[0])
       {case 0:var p=param[2],s=param[1];return tag_string(fmt,p[1],s);
        case 1:
         var l=param[2],param$0=param[1],p$0=param$0[4];
         open_tag(fmt,p$0[10]);
         if(p$0[7])
          fprint_list(fmt,0,param$0,l);
         else
          {var _C_=param$0[4],_D_=param$0[3],_E_=param$0[2],_F_=param$0[1];
           if(l)
            {var tl=l[2],hd=l[1];
             tag_string(fmt,_C_[11],_F_);
             if(_C_[1])caml_call2(Stdlib_format[13],fmt,cst$6);
             var _z_=_C_[8],indent=0;
             if(379096626 === _z_)
              caml_call2(Stdlib_format[5],fmt,0);
             else
              if(736550845 <= _z_)
               if(922275930 <= _z_)
                caml_call2(Stdlib_format[11],fmt,indent);
               else
                caml_call2(Stdlib_format[9],fmt,indent);
              else
               if(-921200850 <= _z_)
                caml_call2(Stdlib_format[7],fmt,indent);
               else
                {var _A_=function(param){return 0 === param[0]?1:0};
                 if(caml_call2(Stdlib_list[30],_A_,l))
                  caml_call2(Stdlib_format[11],fmt,indent);
                 else
                  caml_call2(Stdlib_format[9],fmt,indent)}
             if(_C_[4])
              fprint_list_body_stick_left(fmt,_C_,_E_,hd,tl);
             else
              {open_tag(fmt,_C_[12]);
               fprint_t(fmt,hd);
               var
                _B_=
                 function(x)
                  {if(_C_[3])
                    caml_call2(Stdlib_format[25],fmt,0);
                   else
                    caml_call2(Stdlib_format[27],fmt,0);
                   tag_string(fmt,_C_[13],_E_);
                   if(_C_[2])caml_call2(Stdlib_format[13],fmt,cst$2);
                   return fprint_t(fmt,x)};
               caml_call2(Stdlib_list[15],_B_,tl);
               close_tag(fmt,_C_[12])}
             caml_call2(Stdlib_format[3],fmt,0);
             if(_C_[5])caml_call2(Stdlib_format[13],fmt,cst$7);
             tag_string(fmt,_C_[14],_D_)}
           else
            {tag_string(fmt,_C_[11],_F_);
             var _G_=_C_[1],_H_=_G_ || _C_[5];
             if(_H_)caml_call2(Stdlib_format[13],fmt,cst$8);
             tag_string(fmt,_C_[14],_D_)}}
         return close_tag(fmt,p$0[10]);
        case 2:
         var x=param[2],label=param[1],lp=label[2],lab=label[1];
         if(1 === x[0])
          {var
            l$0=x[2],
            match=x[1],
            p$1=match[4],
            cl=match[3],
            sep=match[2],
            op=match[1];
           if(p$1[6] && p$1[7])
            return fprint_list(fmt,[0,label],[0,op,sep,cl,p$1],l$0)}
         var indent$0=lp[3];
         caml_call2(Stdlib_format[9],fmt,0);
         open_tag(fmt,lp[4]);
         fprint_t(fmt,lab);
         close_tag(fmt,lp[4]);
         var _I_=lp[1];
         if(726666127 === _I_)
          if(lp[2])
           caml_call3(Stdlib_format[29],fmt,1,indent$0);
          else
           caml_call3(Stdlib_format[29],fmt,0,indent$0);
         else
          if(744337004 <= _I_)
           {if(lp[2])caml_call2(Stdlib_format[21],fmt,32)}
          else
           {caml_call2(Stdlib_format[32],fmt,0);
            var _J_=caml_call2(Stdlib_string[1],indent$0,32);
            caml_call2(Stdlib_format[13],fmt,_J_)}
         fprint_t(fmt,x);
         return caml_call2(Stdlib_format[3],fmt,0);
        default:var f=param[1];return caml_call1(f,fmt)}}
    function fprint_list(fmt,label,param,l)
     {var _s_=param[4],_t_=param[3],_u_=param[1];
      if(l)
       {var tl=l[2],hd=l[1];
        if(0 !== tl && ! _s_[4])
         {var
           p$0=param[4],
           cl$0=param[3],
           sep$0=param[2],
           op$0=param[1],
           base_indent=p$0[9],
           _x_=p$0[2]?1:0,
           sep_indent=caml_ml_string_length(sep$0) + _x_ | 0,
           indent$0=base_indent + sep_indent | 0;
          pp_open_xbox(fmt,p$0,indent$0);
          fprint_opt_label(fmt,label);
          tag_string(fmt,p$0[11],op$0);
          if(p$0[1])
           caml_call2(Stdlib_format[25],fmt,0);
          else
           caml_call2(Stdlib_format[27],fmt,0);
          var
           match$0=extra_box(p$0,l),
           close_extra$0=match$0[2],
           open_extra$0=match$0[1];
          caml_call1(open_extra$0,fmt);
          fprint_t(fmt,hd);
          var
           _y_=
            function(x)
             {if(p$0[3])
               caml_call3(Stdlib_format[29],fmt,1,- sep_indent | 0);
              else
               caml_call3(Stdlib_format[29],fmt,0,- sep_indent | 0);
              tag_string(fmt,p$0[13],sep$0);
              if(p$0[2])caml_call2(Stdlib_format[13],fmt,cst$5);
              return fprint_t(fmt,x)};
          caml_call2(Stdlib_list[15],_y_,tl);
          caml_call1(close_extra$0,fmt);
          if(p$0[5])
           caml_call3(Stdlib_format[29],fmt,1,- indent$0 | 0);
          else
           caml_call3(Stdlib_format[29],fmt,0,- indent$0 | 0);
          tag_string(fmt,p$0[14],cl$0);
          return caml_call2(Stdlib_format[3],fmt,0)}
        var p=param[4],cl=param[3],sep=param[2],op=param[1],indent=p[9];
        pp_open_xbox(fmt,p,indent);
        fprint_opt_label(fmt,label);
        tag_string(fmt,p[11],op);
        if(p[1])
         caml_call2(Stdlib_format[25],fmt,0);
        else
         caml_call2(Stdlib_format[27],fmt,0);
        var match=extra_box(p,l),close_extra=match[2],open_extra=match[1];
        caml_call1(open_extra,fmt);
        fprint_list_body_stick_left(fmt,p,sep,hd,tl);
        caml_call1(close_extra,fmt);
        if(p[5])
         caml_call3(Stdlib_format[29],fmt,1,- indent | 0);
        else
         caml_call3(Stdlib_format[29],fmt,0,- indent | 0);
        tag_string(fmt,p[14],cl);
        return caml_call2(Stdlib_format[3],fmt,0)}
      fprint_opt_label(fmt,label);
      tag_string(fmt,_s_[11],_u_);
      var _v_=_s_[1],_w_=_v_ || _s_[5];
      if(_w_)caml_call2(Stdlib_format[13],fmt,cst$4);
      return tag_string(fmt,_s_[14],_t_)}
    function to_formatter(fmt,x)
     {function init_acc(param)
       {var switch$0=0;
        switch(param[0])
         {case 1:if(451368025 === param[1][4][8])switch$0 = 1;break;
          case 2:if(3884224 === param[1][2][1])switch$0 = 1;break
          }
        return switch$0?1:0}
      function merge_acc(force_breaks1,force_breaks2)
       {var force_breaks1$0=force_breaks1 || force_breaks2;
        return force_breaks1$0}
      function map_node(x,force_breaks)
       {switch(x[0])
         {case 1:
           var
            _j_=x[1],
            _k_=_j_[4],
            _l_=_k_[8],
            _m_=_j_[3],
            _n_=_j_[2],
            _o_=_j_[1];
           if(379096626 !== _l_)
            {if(451368025 === _l_)return [0,x,1];
             if(610243080 === _l_)return [0,x,force_breaks];
             var children=x[2];
             if(force_breaks)
              {var
                p=
                 [0,
                  _k_[1],
                  _k_[2],
                  _k_[3],
                  _k_[4],
                  _k_[5],
                  _k_[6],
                  _k_[7],
                  610243080,
                  _k_[9],
                  _k_[10],
                  _k_[11],
                  _k_[12],
                  _k_[13],
                  _k_[14]];
               return [0,[1,[0,_o_,_n_,_m_,p],children],1]}
             return [0,x,0]}
           break;
          case 2:
           var _p_=x[1],_q_=_p_[2],_r_=_p_[1];
           if(726666127 === _q_[1])
            {var b=x[2];
             if(force_breaks)
              {var lp=[0,-76840209,_q_[2],_q_[3],_q_[4]];
               return [0,[2,[0,_r_,lp],b],1]}
             return [0,x,0]}
           break
          }
        return [0,x,force_breaks]}
      function aux(x$0)
       {switch(x$0[0])
         {case 0:var acc=init_acc(x$0);return map_node(x$0,acc);
          case 1:
           var
            children=x$0[2],
            param$1=x$0[1],
            param$2=caml_call2(Stdlib_list[19],aux,children),
            new_children=0,
            accs=0,
            param=param$2;
           for(;;)
            {if(param)
              {var
                param$0=param[2],
                match=param[1],
                y=match[2],
                x=match[1],
                ys=[0,y,accs],
                xs=[0,x,new_children],
                new_children=xs,
                accs=ys,
                param=param$0;
               continue}
             var
              _i_=init_acc(x$0),
              acc$0=caml_call3(Stdlib_list[23],merge_acc,_i_,accs);
             return map_node([1,param$1,new_children],acc$0)}
          case 2:
           var
            x2=x$0[2],
            match$0=x$0[1],
            param$3=match$0[2],
            x1=match$0[1],
            acc0=init_acc(x$0),
            match$1=aux(x1),
            acc1=match$1[2],
            new_x1=match$1[1],
            match$2=aux(x2),
            acc2=match$2[2],
            new_x2=match$2[1],
            acc$1=merge_acc(merge_acc(acc0,acc1),acc2);
           return map_node([2,[0,new_x1,param$3],new_x2],acc$1);
          default:var acc$2=init_acc(x$0);return map_node(x$0,acc$2)}}
      var match=aux(x),new_x=match[1];
      fprint_t(fmt,new_x);
      return caml_call2(Stdlib_format[36],fmt,0)}
    function to_buffer(opt,_h_,buf,x)
     {if(opt)var sth=opt[1],escape=sth;else var escape=870530776;
      if(_h_)var sth$0=_h_[1],styles=sth$0;else var styles=0;
      var fmt=caml_call1(Stdlib_format[109],buf);
      define_styles(fmt,escape,styles);
      return to_formatter(fmt,x)}
    function to_string(escape,styles,x)
     {var buf=caml_call1(Stdlib_buffer[1],500);
      to_buffer(escape,styles,buf,x);
      return caml_call1(Stdlib_buffer[2],buf)}
    function to_channel(opt,_g_,oc,x)
     {if(opt)var sth=opt[1],escape=sth;else var escape=870530776;
      if(_g_)var sth$0=_g_[1],styles=sth$0;else var styles=0;
      var fmt=caml_call1(Stdlib_format[106],oc);
      define_styles(fmt,escape,styles);
      return to_formatter(fmt,x)}
    function to_stdout(escape,styles,x)
     {return to_channel(escape,styles,Stdlib[39],x)}
    function to_stderr(escape,styles,x)
     {return to_channel(escape,styles,Stdlib[40],x)}
    function fprint_t$0(buf,param)
     {var param$0=param;
      for(;;)
       switch(param$0[0])
        {case 0:var s=param$0[1];return caml_call2(Stdlib_buffer[14],buf,s);
         case 1:
          var
           l=param$0[2],
           param$1=param$0[1],
           _c_=param$1[3],
           _e_=param$1[1],
           _d_=param$1[2];
          if(l)
           {var tl=l[2],x$0=l[1];
            caml_call2(Stdlib_buffer[14],buf,_e_);
            fprint_t$0(buf,x$0);
            var
             _f_=
              function(x)
               {caml_call2(Stdlib_buffer[14],buf,_d_);
                return fprint_t$0(buf,x)};
            caml_call2(Stdlib_list[15],_f_,tl);
            return caml_call2(Stdlib_buffer[14],buf,_c_)}
          return caml_call4(Stdlib_printf[5],buf,_a_,_e_,_c_);
         case 2:
          var x=param$0[2],label=param$0[1],label$0=label[1];
          fprint_t$0(buf,label$0);
          var param$0=x;
          continue;
         default:
          var f=param$0[1],fmt=caml_call1(Stdlib_format[109],buf);
          caml_call1(f,fmt);
          return caml_call2(Stdlib_format[36],fmt,0)}}
    function to_buffer$0(buf,x){return fprint_t$0(buf,x)}
    function to_string$0(x)
     {var buf=caml_call1(Stdlib_buffer[1],500);
      to_buffer$0(buf,x);
      return caml_call1(Stdlib_buffer[2],buf)}
    function to_formatter$0(fmt,x)
     {var s=to_string$0(x);
      caml_call3(Stdlib_format[125],fmt,_b_,s);
      return caml_call2(Stdlib_format[36],fmt,0)}
    function to_channel$0(oc,x)
     {var buf=caml_call1(Stdlib_buffer[1],500);
      to_buffer$0(buf,x);
      return caml_call2(Stdlib_buffer[21],oc,buf)}
    function to_stdout$0(x){return to_channel$0(Stdlib[39],x)}
    function to_stderr$0(x){return to_channel$0(Stdlib[40],x)}
    var
     Easy_format=
      [0,
       atom,
       list,
       label,
       [0,
        define_styles,
        to_formatter,
        to_buffer,
        to_string,
        to_channel,
        to_stdout,
        to_stderr],
       [0,
        to_buffer$0,
        to_string$0,
        to_channel$0,
        to_stdout$0,
        to_stderr$0,
        to_formatter$0],
       [0,list_true,label_true,list_false,label_false]];
    runtime.caml_register_global(26,Easy_format,"Easy_format");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJlYXN5X2Zvcm1hdC5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzQ29udGVudCI6W119
