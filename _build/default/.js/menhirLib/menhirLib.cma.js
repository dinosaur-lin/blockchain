(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_bytes_set=runtime.caml_bytes_set,
     caml_check_bound=runtime.caml_check_bound,
     caml_create_bytes=runtime.caml_create_bytes,
     caml_div=runtime.caml_div,
     caml_equal=runtime.caml_equal,
     caml_make_vect=runtime.caml_make_vect,
     caml_ml_string_length=runtime.caml_ml_string_length,
     caml_mod=runtime.caml_mod,
     caml_mul=runtime.caml_mul,
     caml_obj_tag=runtime.caml_obj_tag,
     caml_string_get=runtime.caml_string_get,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_string_unsafe_get=runtime.caml_string_unsafe_get,
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
    function caml_call7(f,a0,a1,a2,a3,a4,a5,a6)
     {return f.length == 7
              ?f(a0,a1,a2,a3,a4,a5,a6)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_feed_outgoing_transition_d=
      caml_string_of_jsbytes("feed: outgoing transition does not exist"),
     cst_Current_LR_1_state=caml_string_of_jsbytes("Current LR(1) state: "),
     cst_some_initial_state=caml_string_of_jsbytes("<some initial state>"),
     arrow=caml_string_of_jsbytes(" -> "),
     dot=caml_string_of_jsbytes("."),
     space=caml_string_of_jsbytes(" "),
     newline$0=caml_string_of_jsbytes("\n"),
     cst$1=caml_string_of_jsbytes("..."),
     cst$0=caml_string_of_jsbytes("???"),
     cst_force_reduction_this_reduc=
      caml_string_of_jsbytes
       ("force_reduction: this reduction is not permitted in this state"),
     cst_resume_expects_HandlingErr=
      caml_string_of_jsbytes
       ("resume expects HandlingError | Shifting | AboutToReduce"),
     cst_offer_expects_InputNeeded=
      caml_string_of_jsbytes("offer expects InputNeeded"),
     cst=caml_string_of_jsbytes(""),
     cst_MenhirLib_ErrorReports_Cop=
      caml_string_of_jsbytes("MenhirLib.ErrorReports.Copy"),
     Stdlib=global_data.Stdlib,
     Stdlib_printf=global_data.Stdlib__printf,
     Assert_failure=global_data.Assert_failure,
     Stdlib_list=global_data.Stdlib__list,
     Stdlib_array=global_data.Stdlib__array,
     Stdlib_char=global_data.Stdlib__char,
     Stdlib_bytes=global_data.Stdlib__bytes,
     Stdlib_sys=global_data.Stdlib__sys,
     Stdlib_lexing=global_data.Stdlib__lexing,
     Stdlib_string=global_data.Stdlib__string,
     Stdlib_buffer=global_data.Stdlib__buffer,
     CamlinternalLazy=global_data.CamlinternalLazy,
     _L_=
      [0,
       [11,
        caml_string_of_jsbytes("Handling error in state "),
        [4,0,0,0,[12,10,[10,0]]]],
       caml_string_of_jsbytes("Handling error in state %d\n%!")],
     _K_=
      [0,
       [11,caml_string_of_jsbytes("Resuming error handling\n"),[10,0]],
       caml_string_of_jsbytes("Resuming error handling\n%!")],
     _J_=
      [0,
       [11,caml_string_of_jsbytes("Initiating error handling\n"),[10,0]],
       caml_string_of_jsbytes("Initiating error handling\n%!")],
     _I_=
      [0,
       [11,
        caml_string_of_jsbytes("Lookahead token is now "),
        [2,
         0,
         [11,
          caml_string_of_jsbytes(" ("),
          [4,
           0,
           0,
           0,
           [12,45,[4,0,0,0,[11,caml_string_of_jsbytes(")\n"),[10,0]]]]]]]],
       caml_string_of_jsbytes("Lookahead token is now %s (%d-%d)\n%!")],
     _H_=[0,[2,0,[12,10,[10,0]]],caml_string_of_jsbytes("%s\n%!")],
     _G_=
      [0,
       [11,
        caml_string_of_jsbytes("Shifting ("),
        [2,
         0,
         [11,caml_string_of_jsbytes(") to state "),[4,0,0,0,[12,10,[10,0]]]]]],
       caml_string_of_jsbytes("Shifting (%s) to state %d\n%!")],
     _F_=
      [0,
       [11,
        caml_string_of_jsbytes("State "),
        [4,0,0,0,[11,caml_string_of_jsbytes(":\n"),[10,0]]]],
       caml_string_of_jsbytes("State %d:\n%!")],
     _E_=[0,caml_string_of_jsbytes("lib/pack/menhirLib.ml"),3548,4],
     _D_=[0,caml_string_of_jsbytes("lib/pack/menhirLib.ml"),3533,8],
     _C_=[0,caml_string_of_jsbytes("lib/pack/menhirLib.ml"),3487,4],
     _B_=[0,caml_string_of_jsbytes("lib/pack/menhirLib.ml"),3296,4],
     _A_=[0,caml_string_of_jsbytes("lib/pack/menhirLib.ml"),3209,4],
     _z_=[0,caml_string_of_jsbytes("lib/pack/menhirLib.ml"),3203,4],
     _y_=[0,caml_string_of_jsbytes("lib/pack/menhirLib.ml"),3184,4],
     _x_=[0,caml_string_of_jsbytes("lib/pack/menhirLib.ml"),2874,2],
     _w_=[0,caml_string_of_jsbytes("lib/pack/menhirLib.ml"),2870,2],
     _v_=[0,caml_string_of_jsbytes("lib/pack/menhirLib.ml"),2866,2],
     _u_=[0,caml_string_of_jsbytes("lib/pack/menhirLib.ml"),2841,2],
     _t_=[0,caml_string_of_jsbytes("lib/pack/menhirLib.ml"),2793,2],
     _s_=[0,caml_string_of_jsbytes("lib/pack/menhirLib.ml"),2795,2],
     _p_=[0,caml_string_of_jsbytes("lib/pack/menhirLib.ml"),2711,10],
     _r_=[0,caml_string_of_jsbytes("lib/pack/menhirLib.ml"),2630,2],
     _q_=[0,caml_string_of_jsbytes("lib/pack/menhirLib.ml"),2633,6],
     _o_=[0,caml_string_of_jsbytes("lib/pack/menhirLib.ml"),2534,6],
     _n_=[0,caml_string_of_jsbytes("lib/pack/menhirLib.ml"),2416,4],
     _m_=[0,caml_string_of_jsbytes("lib/pack/menhirLib.ml"),2465,4],
     _l_=[0,caml_string_of_jsbytes("lib/pack/menhirLib.ml"),2313,2],
     _j_=
      [0,
       [11,caml_string_of_jsbytes("At an unknown location:\n"),0],
       caml_string_of_jsbytes("At an unknown location:\n")],
     _k_=
      [0,
       [11,
        caml_string_of_jsbytes('File "'),
        [2,
         0,
         [11,
          caml_string_of_jsbytes('", line '),
          [4,
           0,
           0,
           0,
           [11,
            caml_string_of_jsbytes(", characters "),
            [4,0,0,0,[12,45,[4,0,0,0,[11,caml_string_of_jsbytes(":\n"),0]]]]]]]]],
       caml_string_of_jsbytes('File "%s", line %d, characters %d-%d:\n')],
     _i_=[0,caml_string_of_jsbytes("lib/pack/menhirLib.ml"),1985,6],
     _f_=[0,caml_string_of_jsbytes("lib/pack/menhirLib.ml"),1972,6],
     _g_=
      [0,
       [11,caml_string_of_jsbytes("before '"),[2,0,[12,39,0]]],
       caml_string_of_jsbytes("before '%s'")],
     _h_=
      [0,
       [11,
        caml_string_of_jsbytes("after '"),
        [2,0,[11,caml_string_of_jsbytes("' and before '"),[2,0,[12,39,0]]]]],
       caml_string_of_jsbytes("after '%s' and before '%s'")],
     _a_=[0,caml_string_of_jsbytes("lib/pack/menhirLib.ml"),1377,4],
     _b_=[0,caml_string_of_jsbytes("lib/pack/menhirLib.ml"),1396,4],
     _d_=[0,caml_string_of_jsbytes("lib/pack/menhirLib.ml"),1694,8],
     _e_=[0,caml_string_of_jsbytes("lib/pack/menhirLib.ml"),1882,6],
     _c_=[0,caml_string_of_jsbytes("lib/pack/menhirLib.ml"),1669,4];
    function take(n,input)
     {if(0 !== n && input)
       {var xs=input[2],x=input[1],xs$0=take(n - 1 | 0,xs);
        return xs === xs$0?input:[0,x,xs$0]}
      return 0}
    function drop(n,xs)
     {var n$0=n,xs$0=xs;
      for(;;)
       {if(0 === n$0)return xs$0;
        if(xs$0){var xs$1=xs$0[2],n$1=n$0 - 1 | 0,n$0=n$1,xs$0=xs$1;continue}
        return 0}}
    function uniq1(cmp,x,ys)
     {var ys$0=ys;
      for(;;)
       {if(ys$0)
         {var ys$1=ys$0[2],y=ys$0[1];
          if(0 === caml_call2(cmp,x,y)){var ys$0=ys$1;continue}
          return [0,y,uniq1(cmp,y,ys$1)]}
        return 0}}
    function uniq(cmp,xs)
     {if(xs){var xs$0=xs[2],x=xs[1];return [0,x,uniq1(cmp,x,xs$0)]}return 0}
    function weed(cmp,xs){return uniq(cmp,caml_call2(Stdlib_list[53],cmp,xs))}
    function length(xs)
     {var
       _cg_=caml_obj_tag(xs),
       _ch_=
        250 === _cg_?xs[1]:246 === _cg_?caml_call1(CamlinternalLazy[2],xs):xs;
      if(_ch_){var xs$0=_ch_[2];return 1 + length(xs$0) | 0}
      return 0}
    function foldr(f,xs,accu)
     {var
       _ce_=caml_obj_tag(xs),
       _cf_=
        250 === _ce_?xs[1]:246 === _ce_?caml_call1(CamlinternalLazy[2],xs):xs;
      if(_cf_)
       {var xs$0=_cf_[2],x=_cf_[1];return caml_call2(f,x,foldr(f,xs$0,accu))}
      return accu}
    function traditional2revised
     (get_raw_token,get_startp,get_endp,parser,lexer)
     {var lexbuf=caml_call2(Stdlib_lexing[3],0,cst);
      function lexer$0(lexbuf)
       {var token=caml_call1(lexer,0);
        lexbuf[11] = caml_call1(get_startp,token);
        lexbuf[12] = caml_call1(get_endp,token);
        return caml_call1(get_raw_token,token)}
      return caml_call2(parser,lexer$0,lexbuf)}
    function revised2traditional(make_token,parser,lexer,lexbuf)
     {function lexer$0(param)
       {var token=caml_call1(lexer,lexbuf);
        return caml_call3(make_token,token,lexbuf[11],lexbuf[12])}
      return caml_call1(parser,lexer$0)}
    function traditional2revised$0(parser)
     {function _ca_(param){var endp=param[3];return endp}
      function _cb_(param){var startp=param[2];return startp}
      function _cc_(param){var token=param[1];return token}
      return function(_cd_)
       {return traditional2revised(_cc_,_cb_,_ca_,parser,_cd_)}}
    function revised2traditional$0(parser)
     {function _b9_(token,startp,endp){return [0,token,startp,endp]}
      return function(_b__,_b$_)
       {return revised2traditional(_b9_,parser,_b__,_b$_)}}
    var
     Simplified=[0,traditional2revised$0,revised2traditional$0],
     Convert=[0,traditional2revised,revised2traditional,Simplified],
     IncrementalEngine=[0],
     EngineTypes=[0];
    function update(buffer,x)
     {var _b7_=buffer[1],switch$0=0;
      if(typeof _b7_ === "number")
       {var _b8_=[0,x];switch$0 = 1}
      else
       var x1=0 === _b7_[0]?_b7_[1]:_b7_[2];
      if(! switch$0)var _b8_=[1,x1,x];
      buffer[1] = _b8_;
      return 0}
    function show(f,buffer)
     {var _b3_=buffer[1];
      if(typeof _b3_ === "number")
       throw [0,Assert_failure,_f_];
      else
       {if(0 === _b3_[0])
         {var invalid=_b3_[1],_b4_=caml_call1(f,invalid);
          return caml_call2(Stdlib_printf[4],_g_,_b4_)}
        var
         invalid$0=_b3_[2],
         valid=_b3_[1],
         _b5_=caml_call1(f,invalid$0),
         _b6_=caml_call1(f,valid);
        return caml_call3(Stdlib_printf[4],_h_,_b6_,_b5_)}}
    function last(buffer)
     {var _b2_=buffer[1];
      if(typeof _b2_ === "number")
       throw [0,Assert_failure,_i_];
      else
       var invalid=0 === _b2_[0]?_b2_[1]:_b2_[2];
      return invalid}
    function wrap(lexer)
     {var buffer=[0,0];
      return [0,
              buffer,
              function(lexbuf)
               {var token=caml_call1(lexer,lexbuf);
                update(buffer,[0,lexbuf[11],lexbuf[12]]);
                return token}]}
    function wrap_supplier(supplier)
     {var buffer=[0,0];
      return [0,
              buffer,
              function(param)
               {var
                 triple=caml_call1(supplier,0),
                 pos2=triple[3],
                 pos1=triple[2];
                update(buffer,[0,pos1,pos2]);
                return triple}]}
    function extract(text,param)
     {var
       pos2=param[2],
       pos1=param[1],
       ofs1=pos1[4],
       ofs2=pos2[4],
       len=ofs2 - ofs1 | 0;
      try
       {var _b0_=caml_call3(Stdlib_string[4],text,ofs1,len);return _b0_}
      catch(_b1_)
       {_b1_ = caml_wrap_exception(_b1_);
        if(_b1_[1] === Stdlib[6])return cst$0;
        throw _b1_}}
    function sanitize(text)
     {function _bZ_(c){return 32 <= c?c:32}
      return caml_call2(Stdlib_string[10],_bZ_,text)}
    function compress(text)
     {var
       b=caml_call1(Stdlib_bytes[5],text),
       n=runtime.caml_ml_bytes_length(b),
       i=0,
       j=0,
       skipping=0;
      for(;;)
       {if(j < n)
         {var
           j$0=j + 1 | 0,
           c=runtime.caml_bytes_get(b,j),
           _bY_=c - 9 | 0,
           switch$0=0;
          if(4 < _bY_ >>> 0)
           {if(23 === _bY_)switch$0 = 1}
          else
           if(1 < (_bY_ - 2 | 0) >>> 0)switch$0 = 1;
          if(switch$0)
           {var
             i$0=skipping?i:(caml_bytes_set(b,i,32),i + 1 | 0),
             i=i$0,
             j=j$0,
             skipping=1;
            continue}
          caml_bytes_set(b,i,c);
          var i$1=i + 1 | 0,i=i$1,j=j$0,skipping=0;
          continue}
        return caml_call3(Stdlib_bytes[8],b,0,i)}}
    function shorten(k,text)
     {var n=caml_ml_string_length(text);
      if(n <= ((2 * k | 0) + 3 | 0))return text;
      var
       _bV_=caml_call3(Stdlib_string[4],text,n - k | 0,k),
       _bW_=caml_call2(Stdlib[28],cst$1,_bV_),
       _bX_=caml_call3(Stdlib_string[4],text,0,k);
      return caml_call2(Stdlib[28],_bX_,_bW_)}
    function is_digit(c)
     {var _bT_=48 <= c?1:0,_bU_=_bT_?c <= 57?1:0:_bT_;return _bU_}
    var Copy=[248,cst_MenhirLib_ErrorReports_Cop,runtime.caml_fresh_oo_id(0)];
    function expand(f,text)
     {var n=caml_ml_string_length(text),b=caml_call1(Stdlib_buffer[1],n);
      function loop(i)
       {var i$0=i;
        for(;;)
         {if(i$0 < n)
           {var i$1=i$0 + 1 | 0,c=caml_string_get(text,i$0);
            try
             {if(36 !== c)throw Copy;
              var j=[0,i$1];
              for(;;)
               {if(j[1] < n && is_digit(caml_string_get(text,j[1])))
                 {j[1]++;continue}
                if(i$1 === j[1])throw Copy;
                var
                 k=
                  runtime.caml_int_of_string
                   (caml_call3(Stdlib_string[4],text,i$1,j[1] - i$1 | 0)),
                 _bP_=caml_call1(f,k);
                caml_call2(Stdlib_buffer[14],b,_bP_);
                var _bQ_=j[1],i$2=_bQ_;
                break}}
            catch(_bS_)
             {_bS_ = caml_wrap_exception(_bS_);
              if(_bS_ !== Copy)throw _bS_;
              caml_call2(Stdlib_buffer[10],b,c);
              var i$2=i$1,_bR_=_bS_}
            var i$0=i$2;
            continue}
          return caml_call1(Stdlib_buffer[2],b)}}
      return loop(0)}
    function init(filename,lexbuf)
     {lexbuf[12] = [0,filename,1,0,0];return lexbuf}
    function read(filename)
     {var
       c=caml_call1(Stdlib[79],filename),
       _bO_=caml_call1(Stdlib[92],c),
       text=caml_call2(Stdlib[86],c,_bO_);
      caml_call1(Stdlib[93],c);
      var lexbuf=caml_call2(Stdlib_lexing[3],0,text);
      return [0,text,init(filename,lexbuf)]}
    function newline(lexbuf)
     {var pos=lexbuf[12];
      lexbuf[12] = [0,pos[1],pos[2] + 1 | 0,pos[4],pos[4]];
      return 0}
    function range(range)
     {var
       pos2$0=range[2],
       pos1$0=range[1],
       pos2=range[2],
       pos1=range[1],
       _bM_=pos1 === Stdlib_lexing[1]?1:0,
       _bN_=_bM_ || (pos2 === Stdlib_lexing[1]?1:0);
      if(_bN_)return caml_call1(Stdlib_printf[4],_j_);
      var
       file=pos1$0[1],
       line=pos1$0[2],
       char1=pos1$0[4] - pos1$0[3] | 0,
       char2=pos2$0[4] - pos1$0[3] | 0;
      return caml_call5(Stdlib_printf[4],_k_,file,line,char1,char2)}
    function make(x){return [0,x,caml_make_vect(16384,x),0]}
    function ensure(a,i)
     {if(0 <= i)
       {var table=a[2],length$1=table.length - 1,_bJ_=length$1 <= i?1:0;
        if(_bJ_)
         {var length$2=2 * length$1 | 0,length=length$2,_bK_=a[1];
          for(;;)
           {if(! (i < length))
             {var length$0=2 * length | 0,length=length$0;continue}
            var table$0=caml_make_vect(length,_bK_);
            caml_call5(Stdlib_array[10],table,0,table$0,0,length$1);
            a[2] = table$0;
            var _bL_=0;
            break}}
        else
         var _bL_=_bJ_;
        return _bL_}
      throw [0,Assert_failure,_l_]}
    function get(a,i){ensure(a,i);return a[2][1 + i]}
    function set(a,i,x)
     {ensure(a,i);
      a[2][1 + i] = x;
      var _bH_=a[3] <= i?1:0,_bI_=_bH_?(a[3] = i + 1 | 0,0):_bH_;
      return _bI_}
    function extent(a){return a[3]}
    function domain(a){return caml_call3(Stdlib_array[7],a[2],0,a[3])}
    function pack(a)
     {var m=a.length - 1,_bt_=1;
      function _bu_(k$1,v)
       {if(0 <= v)
         {var k=1,max=2;
          for(;;)
           {if(0 < max && ! (v < max))
             {var max$0=caml_mul(max,max),k$0=2 * k | 0,k=k$0,max=max$0;
              continue}
            var _bG_=k;
            break}}
        else
         var _bG_=Stdlib_sys[9];
        return caml_call2(Stdlib[17],k$1,_bG_)}
      var k=caml_call3(Stdlib_array[17],_bu_,_bt_,a);
      if(8 < k)
       {if(0 === (k % 8 | 0))
         {var
           w=k / 8 | 0,
           n=caml_mul(m,w),
           s=caml_create_bytes(n),
           _bw_=m - 1 | 0,
           _bv_=0;
          if(! (_bw_ < 0))
           {var i=_bv_;
            for(;;)
             {var v=[0,caml_check_bound(a,i)[1 + i]],_bx_=1;
              if(! (w < 1))
               {var x=_bx_;
                for(;;)
                 {caml_bytes_set
                   (s,
                    caml_mul(i + 1 | 0,w) - x | 0,
                    caml_call1(Stdlib_char[1],v[1] & 255));
                  v[1] = v[1] >>> 8 | 0;
                  var _bz_=x + 1 | 0;
                  if(w !== x){var x=_bz_;continue}
                  break}}
              var _by_=i + 1 | 0;
              if(_bw_ !== i){var i=_by_;continue}
              break}}
          return [0,k,caml_call1(Stdlib_bytes[42],s)]}
        throw [0,Assert_failure,_m_]}
      if(0 === caml_mod(8,k))
       {var
         w$0=caml_div(8,k),
         n$0=0 === caml_mod(m,w$0)?caml_div(m,w$0):caml_div(m,w$0) + 1 | 0,
         s$0=caml_create_bytes(n$0),
         i$0=[0,0],
         _bB_=n$0 - 1 | 0,
         _bA_=0;
        if(! (_bB_ < 0))
         {var j=_bA_;
          for(;;)
           {var c=[0,0],_bC_=1;
            if(! (w$0 < 1))
             {var x$0=_bC_;
              for(;;)
               {var ii=i$0[1];
                if(ii === m)
                 var _bE_=0;
                else
                 {var v$0=caml_check_bound(a,ii)[1 + ii];
                  i$0[1] = ii + 1 | 0;
                  var _bE_=v$0}
                c[1] = c[1] << k | _bE_;
                var _bF_=x$0 + 1 | 0;
                if(w$0 !== x$0){var x$0=_bF_;continue}
                break}}
            caml_bytes_set(s$0,j,caml_call1(Stdlib_char[1],c[1]));
            var _bD_=j + 1 | 0;
            if(_bB_ !== j){var j=_bD_;continue}
            break}}
        return [0,k,caml_call1(Stdlib_bytes[42],s$0)]}
      throw [0,Assert_failure,_n_]}
    function get1(s,i)
     {var
       c=caml_string_unsafe_get(s,i >>> 3 | 0),
       c$0=c >>> (caml_call1(Stdlib[21],i) & 7) | 0,
       c$1=c$0 & 1;
      return c$1}
    function get$0(param,i)
     {var s=param[2],k=param[1],switcher=k - 1 | 0;
      if(! (15 < switcher >>> 0))
       switch(switcher)
        {case 0:return get1(s,i);
         case 1:
          var
           c=caml_string_unsafe_get(s,i >>> 2 | 0),
           c$0=c >>> (2 * (caml_call1(Stdlib[21],i) & 3) | 0) | 0,
           c$1=c$0 & 3;
          return c$1;
         case 3:
          var
           c$2=caml_string_unsafe_get(s,i >>> 1 | 0),
           c$3=c$2 >>> (4 * (caml_call1(Stdlib[21],i) & 1) | 0) | 0,
           c$4=c$3 & 15;
          return c$4;
         case 7:return caml_string_unsafe_get(s,i);
         case 15:
          var j$0=2 * i | 0;
          return (caml_string_unsafe_get(s,j$0) << 8)
                 +
                 caml_string_unsafe_get(s,j$0 + 1 | 0)
                 |
                 0
         }
      if(32 === k)
       {var j=4 * i | 0;
        return (((((caml_string_unsafe_get(s,j) << 8)
                   +
                   caml_string_unsafe_get(s,j + 1 | 0)
                   |
                   0)
                  <<
                  8)
                 +
                 caml_string_unsafe_get(s,j + 2 | 0)
                 |
                 0)
                <<
                8)
               +
               caml_string_unsafe_get(s,j + 3 | 0)
               |
               0}
      throw [0,Assert_failure,_o_]}
    function unflatten1(param,i,j)
     {var data=param[2],n=param[1];return get1(data,caml_mul(n,i) + j | 0)}
    function decode(displacement)
     {return 0 === (displacement & 1)
              ?displacement >>> 1 | 0
              :- (displacement >>> 1 | 0) | 0}
    function compress$0(equal,insignificant,dummy,m,n,t)
     {if(t.length - 1 === m)
       {var _bm_=m - 1 | 0,_bl_=0;
        if(! (_bm_ < 0))
         {var i=_bl_;
          for(;;)
           {if(caml_check_bound(t,i)[1 + i].length - 1 !== n)
             throw [0,Assert_failure,_q_];
            var _bp_=i + 1 | 0;
            if(_bm_ !== i){var i=_bp_;continue}
            break}}
        var
         sparse=
          function(i,line)
           {var j$2=n - 1 | 0,j=j$2,rank=0,row=0;
            for(;;)
             {if(0 <= j)
               {var x=caml_check_bound(line,j)[1 + j];
                if(caml_call1(insignificant,x))
                 {var j$0=j - 1 | 0,j=j$0;continue}
                var
                 row$0=[0,[0,j,x],row],
                 rank$0=1 + rank | 0,
                 j$1=j - 1 | 0,
                 j=j$1,
                 rank=rank$0,
                 row=row$0;
                continue}
              return [0,i,rank,row]}},
         rows=caml_call2(Stdlib_array[16],sparse,t),
         _bn_=
          function(param,_bs_)
           {var rank2=_bs_[2],rank1=param[2];
            return runtime.caml_int_compare(rank2,rank1)};
        caml_call2(Stdlib_array[29],_bn_,rows);
        var
         displacement=caml_make_vect(m,0),
         data=make(dummy),
         _bo_=
          function(param$1)
           {var row$1=param$1[3],i=param$1[1];
            if(row$1)
             {var match$0=row$1[1],j$0=match$0[1],k$1=- j$0 | 0,k=k$1;
              a:
              for(;;)
               {var d=data[3],param=row$1;
                for(;;)
                 {if(param)
                   {var row=param[2],match=param[1],x=match[2],j=match[1];
                    if(! (0 <= (k + j | 0)))throw [0,Assert_failure,_p_];
                    if(d <= (k + j | 0))
                     var _bq_=1;
                    else
                     {var y=get(data,k + j | 0),switch$0=0;
                      if(caml_call1(insignificant,y) || caml_call2(equal,x,y))
                       switch$0 = 1;
                      else
                       var _bq_=0;
                      if(switch$0){var param=row;continue}}}
                  else
                   var _bq_=1;
                  if(! _bq_){var k$0=k + 1 | 0,k=k$0;continue a}
                  var k$2=k;
                  break}
                break}}
            else
             var k$2=0;
            var param$0=row$1;
            for(;;)
             {if(param$0)
               {var
                 row$0=param$0[2],
                 match$1=param$0[1],
                 x$0=match$1[2],
                 j$1=match$1[1];
                set(data,k$2 + j$1 | 0,x$0);
                var param$0=row$0;
                continue}
              var _br_=0 <= k$2?k$2 << 1:((- k$2 | 0) << 1) + 1 | 0;
              caml_check_bound(displacement,i)[1 + i] = _br_;
              return 0}};
        caml_call2(Stdlib_array[13],_bo_,rows);
        return [0,displacement,domain(data)]}
      throw [0,Assert_failure,_r_]}
    function get$1(param,i,j)
     {var data=param[2],displacement=param[1];
      if(0 <= i && i < displacement.length - 1)
       {var k=decode(caml_check_bound(displacement,i)[1 + i]);
        if(0 <= (k + j | 0) && (k + j | 0) < data.length - 1)
         {var _bk_=k + j | 0;return caml_check_bound(data,_bk_)[1 + _bk_]}
        throw [0,Assert_failure,_s_]}
      throw [0,Assert_failure,_t_]}
    function getget(get_displacement,get_data,param,i,j)
     {var
       data=param[2],
       displacement=param[1],
       k=decode(caml_call2(get_displacement,displacement,i));
      return caml_call2(get_data,data,k + j | 0)}
    function make$0(a)
     {var n=a.length - 1,size=[0,0];
      function _bd_(i)
       {var s=size[1];
        if(i < n)size[1] = s + (caml_check_bound(a,i)[1 + i].length - 1) | 0;
        return s}
      var entry=caml_call2(Stdlib_array[2],n + 1 | 0,_bd_),_be_=size[1];
      if(caml_check_bound(entry,n)[1 + n] === _be_)
       {var
         i=[0,0],
         j=[0,0],
         _bf_=
          function(param)
           {for(;;)
             {var
               _bg_=i[1],
               _bh_=caml_check_bound(a,_bg_)[1 + _bg_].length - 1;
              if(j[1] === _bh_){i[1] = i[1] + 1 | 0;j[1] = 0;continue}
              var
               _bi_=j[1],
               _bj_=i[1],
               x=
                caml_check_bound(caml_check_bound(a,_bj_)[1 + _bj_],_bi_)
                 [1 + _bi_];
              j[1] = j[1] + 1 | 0;
              return x}},
         data=caml_call2(Stdlib_array[2],size[1],_bf_);
        return [0,data,entry]}
      throw [0,Assert_failure,_u_]}
    function length$0(param){var entry=param[2];return entry.length - 1}
    function row_length(param,i)
     {var entry=param[2],_bc_=i + 1 | 0,_bb_=caml_check_bound(entry,i)[1 + i];
      return caml_check_bound(entry,_bc_)[1 + _bc_] - _bb_ | 0}
    function row_length_via(get_entry,i)
     {var _ba_=caml_call1(get_entry,i);
      return caml_call1(get_entry,i + 1 | 0) - _ba_ | 0}
    function read$0(la,i,j)
     {var entry=la[2],data=la[1];
      if(0 <= j && j < row_length(la,i))
       {var _a$_=caml_check_bound(entry,i)[1 + i] + j | 0;
        return caml_check_bound(data,_a$_)[1 + _a$_]}
      throw [0,Assert_failure,_v_]}
    function read_via(get_data,get_entry,i,j)
     {if(0 <= j && j < row_length_via(get_entry,i))
       return caml_call1(get_data,caml_call1(get_entry,i) + j | 0);
      throw [0,Assert_failure,_w_]}
    function write(la,i,j,v)
     {var entry=la[2],data=la[1];
      if(0 <= j && j < row_length(la,i))
       {var _a__=caml_check_bound(entry,i)[1 + i] + j | 0;
        caml_check_bound(data,_a__)[1 + _a__] = v;
        return 0}
      throw [0,Assert_failure,_x_]}
    function read_interval_via(get_data,i,j)
     {if(i === j)return 0;
      var _a9_=read_interval_via(get_data,i + 1 | 0,j);
      return [0,caml_call1(get_data,i),_a9_]}
    function read_row_via(get_data,get_entry,i)
     {var _a8_=caml_call1(get_entry,i + 1 | 0);
      return read_interval_via(get_data,caml_call1(get_entry,i),_a8_)}
    function read_row(param,i)
     {var entry=param[2],data=param[1];
      function _a5_(_a7_){return caml_check_bound(entry,_a7_)[1 + _a7_]}
      return read_row_via
              (function(_a6_){return caml_check_bound(data,_a6_)[1 + _a6_]},
               _a5_,
               i)}
    var TableFormat=[0],InspectionTableFormat=[0];
    function Symbols(T){return [0]}
    var
     StaticVersion=[0,0],
     _M_=
      [0,
       function(T)
        {function number(s){return s}
         var _aI_=T[1],_aJ_=T[3],_aK_=T[2],error_value=0;
         function foreach_terminal(f,accu$0)
          {var match=T[5],n=match[1],i=0,accu=accu$0;
           for(;;)
            {if(i === n)return accu;
             var accu$1=caml_call2(f,i,accu),i$0=i + 1 | 0,i=i$0,accu=accu$1;
             continue}}
         function non_start_production(i)
          {if(T[9] <= i && (i - T[9] | 0) < T[10].length - 1)return 0;
           throw [0,Assert_failure,_C_]}
         function production_index(i){non_start_production(i);return i}
         function find_production(i){non_start_production(i);return i}
         function default_reduction(state,defred,nodefred,env)
          {var code=get$0(T[4],state);
           return 0 === code
                   ?caml_call1(nodefred,env)
                   :caml_call2(defred,env,code - 1 | 0)}
         function is_start(prod){return prod < T[9]?1:0}
         function unmarshal2(table,i,j){return getget(get$0,get$0,table,i,j)}
         function action(state,terminal,value,shift,reduce,fail,env)
          {var c=unflatten1(T[5],state,terminal);
           if(1 === c)
            {var
              action=unmarshal2(T[6],state,terminal),
              opcode=action & 3,
              param=action >>> 2 | 0;
             if(2 <= opcode)
              {var please_discard=2 === opcode?1:0;
               return caml_call5
                       (shift,env,please_discard,terminal,value,param)}
             return caml_call2(reduce,env,param)}
           if(0 === c)return caml_call1(fail,env);
           throw [0,Assert_failure,_D_]}
         function goto_nt(state,nt)
          {var code=unmarshal2(T[8],state,nt);return code - 1 | 0}
         function goto_prod(state,prod)
          {return goto_nt(state,get$0(T[7],prod))}
         function maybe_goto_nt(state,nt)
          {var code=unmarshal2(T[8],state,nt);
           if(0 <= code)return 0 === code?0:[0,code - 1 | 0];
           throw [0,Assert_failure,_E_]}
         var _aL_=T[11];
         function semantic_action(prod)
          {var _a4_=prod - T[9] | 0;
           return caml_check_bound(T[10],_a4_)[1 + _a4_]}
         function may_reduce(state,prod)
          {var _aU_=0;
           function _aV_(param)
            {var _aW_=0;
             return foreach_terminal
                     (function(t,accu)
                       {if(accu)return accu;
                        var _aX_=0;
                        function _aY_(param){return 0}
                        function _aZ_(param,prod$0){return prod === prod$0?1:0}
                        return action
                                (state,
                                 t,
                                 0,
                                 function(param,_a3_,_a2_,_a1_,_a0_){return 0},
                                 _aZ_,
                                 _aY_,
                                 _aX_)},
                      _aW_)}
           return default_reduction
                   (state,
                    function(param,prod$0){return prod === prod$0?1:0},
                    _aV_,
                    _aU_)}
         var log=T[12]?1:0;
         function state(state)
          {return T[12]?caml_call3(Stdlib_printf[1],Stdlib[40],_F_,state):0}
         function shift(terminal,state)
          {var _aS_=T[12];
           if(_aS_)
            {var
              match=_aS_[1],
              terminals=match[1],
              _aT_=caml_check_bound(terminals,terminal)[1 + terminal];
             return caml_call4(Stdlib_printf[1],Stdlib[40],_G_,_aT_,state)}
           return 0}
         function reduce_or_accept(prod)
          {var _aQ_=T[12];
           if(_aQ_)
            {var
              match=_aQ_[1],
              productions=match[2],
              _aR_=caml_check_bound(productions,prod)[1 + prod];
             return caml_call3(Stdlib_printf[1],Stdlib[40],_H_,_aR_)}
           return 0}
         function lookahead_token(token,startp,endp)
          {var _aM_=T[12];
           if(_aM_)
            {var
              match=_aM_[1],
              terminals=match[1],
              _aN_=endp[4],
              _aO_=startp[4],
              _aP_=caml_check_bound(terminals,token)[1 + token];
             return caml_call5(Stdlib_printf[1],Stdlib[40],_I_,_aP_,_aO_,_aN_)}
           return 0}
         function initiating_error_handling(param)
          {return T[12]?caml_call2(Stdlib_printf[1],Stdlib[40],_J_):0}
         function resuming_error_handling(param)
          {return T[12]?caml_call2(Stdlib_printf[1],Stdlib[40],_K_):0}
         function handling_error(state)
          {return T[12]?caml_call3(Stdlib_printf[1],Stdlib[40],_L_,state):0}
         var
          Log=
           [0,
            state,
            shift,
            reduce_or_accept,
            lookahead_token,
            initiating_error_handling,
            resuming_error_handling,
            handling_error];
         return [0,
                 number,
                 _aI_,
                 _aJ_,
                 _aK_,
                 error_value,
                 foreach_terminal,
                 production_index,
                 find_production,
                 default_reduction,
                 action,
                 goto_nt,
                 goto_prod,
                 maybe_goto_nt,
                 is_start,
                 _aL_,
                 semantic_action,
                 may_reduce,
                 log,
                 Log]}],
     _N_=
      [0,
       Symbols,
       function(TT,IT,ET,_ao_)
        {function read_packed_linearized(param,i)
          {var entry=param[2],data=param[1];
           function _aF_(_aH_){return get$0(entry,_aH_)}
           return read_row_via(function(_aG_){return get$0(data,_aG_)},_aF_,i)}
         function decode_symbol(symbol)
          {if(0 < symbol)
            {var kind=symbol & 1,symbol$0=symbol >>> 1 | 0;
             return 0 === kind
                     ?caml_call1(IT[1],symbol$0 - 1 | 0)
                     :caml_call1(IT[2],symbol$0)}
           throw [0,Assert_failure,_y_]}
         function n2i(nt)
          {var answer=TT[9] + nt | 0;
           if(caml_equal(caml_call1(IT[2],answer),[0,[1,nt]]))return answer;
           throw [0,Assert_failure,_z_]}
         function t2i(answer)
          {if(caml_equal(caml_call1(IT[1],answer),[0,[0,answer]]))
            return answer;
           throw [0,Assert_failure,_A_]}
         function compare_terminals(t1,t2)
          {var _aE_=t2i(t2);return t2i(t1) - _aE_ | 0}
         function compare_nonterminals(nt1,nt2)
          {var _aD_=n2i(nt2);return n2i(nt1) - _aD_ | 0}
         function compare_symbols(symbol1,symbol2)
          {var _ay_=symbol1[1];
           if(0 === _ay_[0])
            {var _az_=symbol2[1],_aA_=_ay_[1];
             if(0 === _az_[0])
              {var t2=_az_[1];return compare_terminals(_aA_,t2)}
             return -1}
           var _aB_=symbol2[1],_aC_=_ay_[1];
           if(0 === _aB_[0])return 1;
           var nt2=_aB_[1];
           return compare_nonterminals(_aC_,nt2)}
         function compare_productions(prod1,prod2){return prod1 - prod2 | 0}
         function compare_items(param,_ax_)
          {var
            index2=_ax_[2],
            prod2=_ax_[1],
            index1=param[2],
            prod1=param[1],
            c=prod1 - prod2 | 0;
           return 0 === c?index1 - index2 | 0:c}
         function incoming_symbol(s)
          {var
            core=get$0(IT[4],s),
            symbol=decode_symbol(get$0(IT[6],core)),
            symbol$0=symbol[1];
           return symbol$0}
         function lhs(prod)
          {var _aw_=get$0(TT[7],prod);return caml_call1(IT[2],_aw_)}
         function rhs(prod)
          {var _av_=read_packed_linearized(IT[3],prod);
           return caml_call2(Stdlib_list[17],decode_symbol,_av_)}
         function export$0(t){return [0,t >>> 10 | 0,t % 1024 | 0]}
         function items(s)
          {var core=get$0(IT[4],s),_au_=read_packed_linearized(IT[5],core);
           return caml_call2(Stdlib_list[17],export$0,_au_)}
         function decode_bool(i)
          {if(0 !== i && 1 !== i)throw [0,Assert_failure,_B_];
           return 1 === i?1:0}
         function nullable(nt)
          {var _at_=n2i(nt);return decode_bool(get1(IT[7],_at_))}
         function first(nt,t)
          {var _ar_=t2i(t),_as_=n2i(nt);
           return decode_bool(unflatten1(IT[8],_as_,_ar_))}
         function xfirst(symbol,t)
          {var _aq_=symbol[1];
           if(0 === _aq_[0])
            {var t$0=_aq_[1];return 0 === compare_terminals(t,t$0)?1:0}
           var nt=_aq_[1];
           return first(nt,t)}
         function foldij(i,j,f,accu)
          {var i$0=i,accu$0=accu;
           for(;;)
            {if(i$0 === j)return accu$0;
             var
              accu$1=caml_call2(f,i$0,accu$0),
              i$1=i$0 + 1 | 0,
              i$0=i$1,
              accu$0=accu$1;
             continue}}
         function foreach_terminal(f,accu)
          {var match=TT[5],n=match[1];
           return foldij
                   (0,
                    n,
                    function(i,accu)
                     {return caml_call2(f,caml_call1(IT[1],i),accu)},
                    accu)}
         function foreach_terminal_but_error(f,accu)
          {var match=TT[5],n=match[1];
           return foldij
                   (0,
                    n,
                    function(i,accu)
                     {return i === TT[2]
                              ?accu
                              :caml_call2(f,caml_call1(IT[1],i),accu)},
                    accu)}
         function feed_failure(param)
          {return caml_call1(Stdlib[1],cst_feed_outgoing_transition_d)}
         function reduce(env,prod){return feed_failure(0)}
         function initiate(env){return feed_failure(0)}
         function feed(symbol,startp,semv,endp,env)
          {if(0 === symbol[0])
            {var
              terminal=symbol[1],
              terminal$0=t2i(terminal),
              source$0=env[4],
              _ap_=
               function(env,please_discard,terminal,semv,target)
                {var stack=[0,source$0,semv,startp,endp,env[3]];
                 return [0,env[1],env[2],stack,target]};
             return caml_call7
                     (ET[10],source$0,terminal$0,semv,_ap_,reduce,initiate,env)}
           var
            nt=symbol[1],
            nt$0=n2i(nt),
            source=env[4],
            match=caml_call2(ET[13],source,nt$0);
           if(match)
            {var target=match[1],stack=[0,source,semv,startp,endp,env[3]];
             return [0,env[1],env[2],stack,target]}
           return feed_failure(0)}
         return [0,
                 compare_terminals,
                 compare_nonterminals,
                 compare_symbols,
                 compare_productions,
                 compare_items,
                 incoming_symbol,
                 items,
                 lhs,
                 rhs,
                 nullable,
                 first,
                 xfirst,
                 foreach_terminal,
                 foreach_terminal_but_error,
                 feed]}],
     _O_=
      [0,
       make$0,
       read$0,
       write,
       length$0,
       row_length,
       read_row,
       row_length_via,
       read_via,
       read_row_via],
     _P_=[0,compress$0,get$1,getget],
     _Q_=[0,pack,get$0,get1,unflatten1],
     _R_=[0,make,get,set,extent,domain],
     _S_=
      [0,
       function(I,User)
        {function print_symbols(i,symbols)
          {var i$0=i,symbols$0=symbols;
           for(;;)
            {if(0 === i$0)
              {caml_call1(User[1],dot);
               caml_call1(User[1],space);
               var i$0=-1;
               continue}
             if(symbols$0)
              {var symbols$1=symbols$0[2],symbol=symbols$0[1];
               caml_call1(User[2],symbol);
               caml_call1(User[1],space);
               var i$1=i$0 - 1 | 0,i$0=i$1,symbols$0=symbols$1;
               continue}
             return 0}}
         function print_element_as_symbol(element)
          {var s=element[1],_an_=[0,caml_call1(I[29],s)];
           return caml_call1(User[2],_an_)}
         var _ah_=User[3];
         if(_ah_)
          var print_element=_ah_[1],print_element$0=print_element;
         else
          var print_element$0=print_element_as_symbol;
         function _ai_(env)
          {var match=caml_call1(I[13],env),match$0=caml_call1(I[21],env);
           if(match && match$0)
            {var env$0=match$0[1],element=match[1];
             _ai_(env$0);
             caml_call1(User[1],space);
             return caml_call1(print_element$0,element)}
           return 0}
         function print_stack(env)
          {_ai_(env);return caml_call1(User[1],newline$0)}
         function print_item(param)
          {var i=param[2],prod=param[1],_am_=caml_call1(I[31],prod);
           caml_call1(User[2],_am_);
           caml_call1(User[1],arrow);
           print_symbols(i,caml_call1(I[32],prod));
           return caml_call1(User[1],newline$0)}
         function print_symbols$0(symbols){return print_symbols(-1,symbols)}
         function print_production(prod){return print_item([0,prod,-1])}
         function print_current_state(env)
          {caml_call1(User[1],cst_Current_LR_1_state);
           var match=caml_call1(I[13],env);
           if(match)
            {var
              match$0=match[1],
              current=match$0[1],
              _aj_=caml_call1(I[9],current),
              _ak_=caml_call1(Stdlib[33],_aj_);
             caml_call1(User[1],_ak_);
             caml_call1(User[1],newline$0);
             var _al_=caml_call1(I[30],current);
             return caml_call2(Stdlib_list[15],print_item,_al_)}
           caml_call1(User[1],cst_some_initial_state);
           return caml_call1(User[1],newline$0)}
         function print_env(env)
          {print_stack(env);
           print_current_state(env);
           return caml_call1(User[1],newline$0)}
         return [0,
                 print_symbols$0,
                 print_element_as_symbol,
                 print_stack,
                 print_item,
                 print_production,
                 print_current_state,
                 print_env]}],
     _T_=[0,init,read,newline,range],
     _U_=
      [0,
       wrap,
       wrap_supplier,
       show,
       last,
       extract,
       sanitize,
       compress,
       shorten,
       expand],
     MenhirLib=
      [0,
       [0,take,drop,uniq,weed,length,foldr],
       Convert,
       IncrementalEngine,
       EngineTypes,
       [0,
        function(T)
         {var
           number=T[1],
           production_index=T[7],
           find_production=T[8],
           Error=T[15],
           log=T[18],
           Log=T[19];
          function check_for_default_reduction(env)
           {return caml_call4
                    (T[9],env[4],announce_reduce,check_for_error_token,env)}
          function run(env,please_discard)
           {if(log)caml_call1(Log[1],env[4]);
            return please_discard?[0,env]:check_for_default_reduction(env)}
          function check_for_error_token(env)
           {if(env[1]){if(log)caml_call1(Log[6],0);return [3,env]}
            var
             match=env[2],
             token=match[1],
             _af_=caml_call1(T[3],token),
             _ag_=caml_call1(T[2],token);
            return caml_call7
                    (T[10],env[4],_ag_,_af_,shift,announce_reduce,initiate,env)}
          function shift(env,please_discard,terminal,value,s)
           {if(log)caml_call2(Log[2],terminal,s);
            var
             match=env[2],
             endp=match[3],
             startp=match[2],
             stack=[0,env[4],value,startp,endp,env[3]],
             new_env=[0,env[1],env[2],stack,s];
            return [1,env,new_env,please_discard]}
          function announce_reduce(env,prod)
           {if(caml_call1(T[14],prod))
             {if(log)caml_call1(Log[3],prod);var v=env[3][2];return [4,v]}
            return [2,env,prod]}
          function initiate(env)
           {if(log)caml_call1(Log[5],0);
            var env$0=[0,1,env[2],env[3],env[4]];
            return [3,env$0]}
          function reduce(env,prod)
           {if(log)caml_call1(Log[3],prod);
            try
             {var stack=caml_call2(T[16],prod,env)}
            catch(_ae_)
             {_ae_ = caml_wrap_exception(_ae_);
              if(_ae_ === Error)return initiate(env);
              throw _ae_}
            var
             current=caml_call2(T[12],stack[1],prod),
             env$0=[0,env[1],env[2],stack,current];
            return run(env$0,0)}
          function error_shift(env,please_discard,terminal,value,s)
           {if(caml_equal(terminal,T[4]) && caml_equal(value,T[5]))
             {if(log)caml_call1(Log[7],env[4]);
              return shift(env,please_discard,terminal,value,s)}
            throw [0,Assert_failure,_b_]}
          function error_reduce(env,prod)
           {if(log)caml_call1(Log[7],env[4]);return reduce(env,prod)}
          function error_fail(env)
           {var cell=env[3],next=cell[5];
            if(next === cell)return 0;
            var env$0=[0,env[1],env[2],next,cell[1]];
            return [3,env$0]}
          function start(s,initial)
           {var empty=[];
            runtime.caml_update_dummy(empty,[0,s,T[5],initial,initial,empty]);
            var env=[0,0,[0,0,initial,initial],empty,s];
            return run(env,1)}
          function offer(param)
           {if(typeof param !== "number" && 0 === param[0])
             {var env=param[1];
              return function(triple)
               {if(log)
                 {var
                   endp=triple[3],
                   startp=triple[2],
                   token=triple[1],
                   _ad_=caml_call1(T[2],token);
                  caml_call3(Log[4],_ad_,startp,endp)}
                var env$0=[0,0,triple,env[3],env[4]];
                return check_for_default_reduction(env$0)}}
            return caml_call1(Stdlib[1],cst_offer_expects_InputNeeded)}
          function resume(param)
           {if(typeof param !== "number")
             switch(param[0])
              {case 1:
                var please_discard=param[3],env=param[2];
                return run(env,please_discard);
               case 2:
                var prod=param[2],env$0=param[1];return reduce(env$0,prod);
               case 3:
                var env$1=param[1];
                if(env$1[1])
                 return caml_call7
                         (T[10],
                          env$1[4],
                          T[4],
                          T[5],
                          error_shift,
                          error_reduce,
                          error_fail,
                          env$1);
                throw [0,Assert_failure,_a_]
               }
            return caml_call1(Stdlib[1],cst_resume_expects_HandlingErr)}
          function lexer_lexbuf_to_supplier(lexer,lexbuf,param)
           {var
             token=caml_call1(lexer,lexbuf),
             startp=lexbuf[11],
             endp=lexbuf[12];
            return [0,token,startp,endp]}
          function loop(read,checkpoint)
           {var checkpoint$0=checkpoint;
            for(;;)
             if(typeof checkpoint$0 === "number")
              throw Error;
             else
              switch(checkpoint$0[0])
               {case 0:
                 var
                  triple=caml_call1(read,0),
                  checkpoint$1=caml_call1(offer(checkpoint$0),triple),
                  checkpoint$0=checkpoint$1;
                 continue;
                case 4:var v=checkpoint$0[1];return v;
                default:
                 var
                  checkpoint$2=resume(checkpoint$0),
                  checkpoint$0=checkpoint$2;
                 continue}}
          function entry(s,lexer,lexbuf)
           {var initial=lexbuf[12],_ab_=start(s,initial);
            return loop
                    (function(_ac_)
                      {return lexer_lexbuf_to_supplier(lexer,lexbuf,_ac_)},
                     _ab_)}
          function loop_handle(succeed,fail,read,checkpoint)
           {var checkpoint$0=checkpoint;
            for(;;)
             {if(typeof checkpoint$0 !== "number")
               switch(checkpoint$0[0])
                {case 0:
                  var
                   triple=caml_call1(read,0),
                   checkpoint$1=caml_call1(offer(checkpoint$0),triple),
                   checkpoint$0=checkpoint$1;
                  continue;
                 case 4:var v=checkpoint$0[1];return caml_call1(succeed,v);
                 case 3:break;
                 default:
                  var
                   checkpoint$2=resume(checkpoint$0),
                   checkpoint$0=checkpoint$2;
                  continue}
              return caml_call1(fail,checkpoint$0)}}
          function loop_handle_undo(succeed,fail,read,checkpoint$2)
           {var switch$0=0;
            if(typeof checkpoint$2 !== "number" && 0 === checkpoint$2[0])
             {var _aa_=1;switch$0 = 1}
            if(! switch$0)var _aa_=0;
            if(_aa_)
             {var param$2=[0,checkpoint$2,checkpoint$2],param=param$2;
              for(;;)
               {var checkpoint=param[2],inputneeded=param[1];
                if(typeof checkpoint !== "number")
                 switch(checkpoint[0])
                  {case 0:
                    var
                     triple=caml_call1(read,0),
                     checkpoint$0=caml_call1(offer(checkpoint),triple),
                     param$0=[0,checkpoint,checkpoint$0],
                     param=param$0;
                    continue;
                   case 4:var v=checkpoint[1];return caml_call1(succeed,v);
                   case 3:break;
                   default:
                    var
                     checkpoint$1=resume(checkpoint),
                     param$1=[0,inputneeded,checkpoint$1],
                     param=param$1;
                    continue}
                return caml_call2(fail,inputneeded,checkpoint)}}
            throw [0,Assert_failure,_c_]}
          function shifts(checkpoint)
           {var checkpoint$0=checkpoint;
            for(;;)
             {if(typeof checkpoint$0 !== "number")
               switch(checkpoint$0[0])
                {case 1:var env=checkpoint$0[1];return [0,env];
                 case 2:
                  var
                   checkpoint$1=resume(checkpoint$0),
                   checkpoint$0=checkpoint$1;
                  continue;
                 case 3:return 0
                 }
              throw [0,Assert_failure,_d_]}}
          function acceptable(checkpoint,token,pos)
           {var
             triple=[0,token,pos,pos],
             checkpoint$0=caml_call1(offer(checkpoint),triple),
             match=shifts(checkpoint$0);
            return match?1:0}
          function _V_(cell,current)
           {return [246,
                    function(param)
                     {var next=cell[5];
                      if(next === cell)return 0;
                      var element=[0,current,cell[2],cell[3],cell[4]];
                      return [0,element,_V_(next,cell[1])]}]}
          function stack(env){return _V_(env[3],env[4])}
          function top(env)
           {var cell=env[3],next=cell[5];
            return next === cell?0:[0,[0,env[4],cell[2],cell[3],cell[4]]]}
          function equal(env1,env2)
           {var _Z_=env1[3] === env2[3]?1:0;
            if(_Z_)
             var
              ___=caml_call1(number,env2[4]),
              _$_=caml_call1(number,env1[4]) === ___?1:0;
            else
             var _$_=_Z_;
            return _$_}
          function current_state_number(env){return caml_call1(number,env[4])}
          function positions(param)
           {var match=param[2],endp=match[3],startp=match[2];
            return [0,startp,endp]}
          function state_has_default_reduction(state)
           {var _W_=0;
            function _X_(env){return 0}
            function _Y_(env,prod){return 1}
            return caml_call4(T[9],state,_Y_,_X_,_W_)}
          function env_has_default_reduction(env)
           {return state_has_default_reduction(env[4])}
          function pop(env)
           {var cell=env[3],next=cell[5];
            return next === cell?0:[0,[0,env[1],env[2],next,cell[1]]]}
          function force_reduction(prod,env)
           {if(caml_call2(T[17],env[4],prod))
             {if(caml_call1(T[14],prod))throw [0,Assert_failure,_e_];
              var
               stack=caml_call2(T[16],prod,env),
               current=caml_call2(T[12],stack[1],prod);
              return [0,env[1],env[2],stack,current]}
            return caml_call1(Stdlib[1],cst_force_reduction_this_reduc)}
          function input_needed(env){return [0,env]}
          function pop_many(i,env)
           {var i$0=i,env$0=env;
            for(;;)
             {if(0 === i$0)return [0,env$0];
              var match=pop(env$0);
              if(match)
               {var env$1=match[1],i$1=i$0 - 1 | 0,i$0=i$1,env$0=env$1;
                continue}
              return 0}}
          function get(i,env)
           {var match=pop_many(i,env);
            if(match){var env$0=match[1];return top(env$0)}
            return 0}
          return [0,
                  Error,
                  entry,
                  offer,
                  resume,
                  lexer_lexbuf_to_supplier,
                  loop,
                  loop_handle,
                  loop_handle_undo,
                  shifts,
                  acceptable,
                  number,
                  production_index,
                  find_production,
                  stack,
                  top,
                  pop_many,
                  get,
                  current_state_number,
                  equal,
                  positions,
                  env_has_default_reduction,
                  state_has_default_reduction,
                  pop,
                  force_reduction,
                  input_needed,
                  start]}],
       _U_,
       _T_,
       _S_,
       _R_,
       _Q_,
       _P_,
       _O_,
       TableFormat,
       InspectionTableFormat,
       _N_,
       _M_,
       StaticVersion];
    runtime.caml_register_global(65,MenhirLib,"MenhirLib");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJtZW5oaXJMaWIuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbXSwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlc0NvbnRlbnQiOltdfQ==
