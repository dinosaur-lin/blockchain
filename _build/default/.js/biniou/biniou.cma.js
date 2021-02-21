(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_bytes_get=runtime.caml_bytes_get,
     caml_bytes_set=runtime.caml_bytes_set,
     caml_bytes_unsafe_get=runtime.caml_bytes_unsafe_get,
     caml_bytes_unsafe_set=runtime.caml_bytes_unsafe_set,
     caml_check_bound=runtime.caml_check_bound,
     caml_create_bytes=runtime.caml_create_bytes,
     caml_fresh_oo_id=runtime.caml_fresh_oo_id,
     caml_make_vect=runtime.caml_make_vect,
     caml_ml_bytes_length=runtime.caml_ml_bytes_length,
     caml_ml_string_length=runtime.caml_ml_string_length,
     caml_obj_tag=runtime.caml_obj_tag,
     caml_register_global=runtime.caml_register_global,
     caml_string_get=runtime.caml_string_get,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_string_unsafe_get=runtime.caml_string_unsafe_get,
     caml_sys_getenv=runtime.caml_sys_getenv,
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
     cst_Bi_util_print_bits=caml_string_of_jsbytes("Bi_util.print_bits"),
     cst_Bi_util_print_bits$0=caml_string_of_jsbytes("Bi_util.print_bits"),
     cst_Bi_util_Error=caml_string_of_jsbytes("Bi_util.Error"),
     cst_Corrupted_data_invalid_ref=
      caml_string_of_jsbytes("Corrupted data (invalid reference)"),
     cst_Bi_share_Rd_poly_create_ty=
      caml_string_of_jsbytes
       ("Bi_share.Rd_poly.create_type_id: exhausted available type_id's"),
     cst_Bi_inbuf_refill_from_chann=
      caml_string_of_jsbytes("Bi_inbuf.refill_from_channel"),
     cst_Bi_inbuf_End_of_input=caml_string_of_jsbytes("Bi_inbuf.End_of_input"),
     cst_Buf_extend_reached_Sys_max=
      caml_string_of_jsbytes("Buf.extend: reached Sys.max_string_length"),
     cst_Junk_input_after_end_of_vi=
      caml_string_of_jsbytes("Junk input after end of vint"),
     cst_Unterminated_vint_or_vint_=
      caml_string_of_jsbytes
       ("Unterminated vint or vint exceeding range of OCaml ints"),
     cst_Vint_exceeding_range_of_OC=
      caml_string_of_jsbytes("Vint exceeding range of OCaml ints"),
     cst$0=caml_string_of_jsbytes(""),
     cst_test_stream_dat=caml_string_of_jsbytes("test-stream.dat"),
     cst_test_stream_dat$0=caml_string_of_jsbytes("test-stream.dat"),
     cst=caml_string_of_jsbytes("\0\0\0\0"),
     cst_Corrupted_stream_excessive=
      caml_string_of_jsbytes("Corrupted stream: excessive chunk length"),
     cst_Chunk_length_exceeds_suppo$0=
      caml_string_of_jsbytes
       ("Chunk length exceeds supported range on this platform"),
     cst_Chunk_length_exceeds_suppo=
      caml_string_of_jsbytes
       ("Chunk length exceeds supported range on this platform"),
     cst_Bi_stream=caml_string_of_jsbytes("Bi_stream: "),
     cst_Bi_io_write_t_Malformed_Ta=
      caml_string_of_jsbytes("Bi_io.write_t: Malformed `Table"),
     cst_Corrupted_data_invalid_tag$0=
      caml_string_of_jsbytes("Corrupted data (invalid tag)"),
     cst_unit=caml_string_of_jsbytes("unit"),
     cst$1=caml_string_of_jsbytes("]"),
     cst$2=caml_string_of_jsbytes(","),
     cst$3=caml_string_of_jsbytes("["),
     cst$4=caml_string_of_jsbytes("[]"),
     cst$5=caml_string_of_jsbytes("}"),
     cst$6=caml_string_of_jsbytes(","),
     cst$7=caml_string_of_jsbytes("{"),
     cst_true=caml_string_of_jsbytes("true"),
     cst_false=caml_string_of_jsbytes("false"),
     cst$8=caml_string_of_jsbytes(")"),
     cst$9=caml_string_of_jsbytes(","),
     cst$10=caml_string_of_jsbytes("("),
     cst$11=caml_string_of_jsbytes(":"),
     cst$12=caml_string_of_jsbytes(">"),
     cst$13=caml_string_of_jsbytes(""),
     cst$14=caml_string_of_jsbytes("<"),
     cst$15=caml_string_of_jsbytes(">"),
     cst$16=caml_string_of_jsbytes("<"),
     cst$17=caml_string_of_jsbytes("[]"),
     cst$18=caml_string_of_jsbytes(""),
     cst_Some=caml_string_of_jsbytes("Some"),
     cst_None=caml_string_of_jsbytes("None"),
     cst_Corrupted_data_invalid_tag=
      caml_string_of_jsbytes("Corrupted data (invalid tag)"),
     cst_Corrupted_data_string=
      caml_string_of_jsbytes("Corrupted data (string)"),
     cst_Corrupted_data_bool_value=
      caml_string_of_jsbytes("Corrupted data (bool value)"),
     cst_Corrupted_data_unit_value=
      caml_string_of_jsbytes("Corrupted data (unit value)"),
     s=caml_string_of_jsbytes("?\xf0\x06\x05\x04\x03\x02\x01"),
     cst_Corrupted_data_invalid_num=
      caml_string_of_jsbytes("Corrupted data (invalid numtag)"),
     cst_Corrupted_data_invalid_fie=
      caml_string_of_jsbytes("Corrupted data (invalid field hashtag)"),
     cst_Cygwin=caml_string_of_jsbytes("Cygwin"),
     cst_Unix=caml_string_of_jsbytes("Unix"),
     cst_Win32=caml_string_of_jsbytes("Win32"),
     cst_bdump_dict=caml_string_of_jsbytes("_bdump-dict"),
     cst_HOMEPATH=caml_string_of_jsbytes("HOMEPATH"),
     cst_bdump_dict$0=caml_string_of_jsbytes(".bdump-dict"),
     cst_HOME=caml_string_of_jsbytes("HOME"),
     cst_bdump_dict$1=caml_string_of_jsbytes(".bdump-dict"),
     cst_HOME$0=caml_string_of_jsbytes("HOME"),
     Stdlib=global_data.Stdlib,
     Stdlib_bytes=global_data.Stdlib__bytes,
     Stdlib_char=global_data.Stdlib__char,
     Stdlib_hashtbl=global_data.Stdlib__hashtbl,
     Stdlib_sys=global_data.Stdlib__sys,
     Stdlib_string=global_data.Stdlib__string,
     Stdlib_printf=global_data.Stdlib__printf,
     Stdlib_list=global_data.Stdlib__list,
     Stdlib_array=global_data.Stdlib__array,
     Assert_failure=global_data.Assert_failure,
     Stdlib_stream=global_data.Stdlib__stream,
     Easy_format=global_data.Easy_format,
     CamlinternalLazy=global_data.CamlinternalLazy,
     Stdlib_obj=global_data.Stdlib__obj,
     Stdlib_printexc=global_data.Stdlib__printexc,
     Stdlib_buffer=global_data.Stdlib__buffer,
     Stdlib_filename=global_data.Stdlib__filename,
     Error=[248,cst_Bi_util_Error,caml_fresh_oo_id(0)],
     _g_=
      [0,
       [11,caml_string_of_jsbytes("Corrupted stream: "),[1,0]],
       caml_string_of_jsbytes("Corrupted stream: %C")],
     _f_=
      [0,
       [11,
        caml_string_of_jsbytes("Corrupted stream: excessive chunk length ("),
        [4,3,0,0,[11,caml_string_of_jsbytes(" bytes)"),0]]],
       caml_string_of_jsbytes
        ("Corrupted stream: excessive chunk length (%i bytes)")],
     _i_=[0,caml_string_of_jsbytes("src/bi_stream.ml"),131,22],
     _j_=[0,2],
     _h_=[0,caml_string_of_jsbytes("src/bi_stream.ml"),102,20],
     _e_=
      [0,
       [11,
        caml_string_of_jsbytes("unsupported word size ("),
        [4,3,0,0,[12,41,0]]],
       caml_string_of_jsbytes("unsupported word size (%i)")],
     _d_=
      [0,
       [11,
        caml_string_of_jsbytes("unsupported word size ("),
        [4,3,0,0,[12,41,0]]],
       caml_string_of_jsbytes("unsupported word size (%i)")],
     _s_=
      [0,
       [11,caml_string_of_jsbytes("0x"),[4,6,[0,2,2],0,0]],
       caml_string_of_jsbytes("0x%02x")],
     _t_=[0,[3,0,0],caml_string_of_jsbytes("%S")],
     _u_=[0,[12,35,[5,6,[0,2,8],0,0]],caml_string_of_jsbytes("#%08lx")],
     _v_=
      [0,
       [11,
        caml_string_of_jsbytes("shared"),
        [4,3,0,0,[11,caml_string_of_jsbytes(" ->"),0]]],
       caml_string_of_jsbytes("shared%i ->")],
     _w_=
      [0,
       [11,caml_string_of_jsbytes("shared"),[4,3,0,0,0]],
       caml_string_of_jsbytes("shared%i")],
     _x_=
      [0,
       [11,caml_string_of_jsbytes("0x"),[7,6,[0,2,16],0,0]],
       caml_string_of_jsbytes("0x%016Lx")],
     _y_=
      [0,
       [11,caml_string_of_jsbytes("0x"),[5,6,[0,2,8],0,0]],
       caml_string_of_jsbytes("0x%08lx")],
     _z_=
      [0,
       [11,caml_string_of_jsbytes("0x"),[4,6,[0,2,4],0,0]],
       caml_string_of_jsbytes("0x%04x")],
     _A_=[0,[3,0,0],caml_string_of_jsbytes("%S")],
     _B_=[0,[3,0,0],caml_string_of_jsbytes("%S")],
     _D_=[0,[12,35,[5,6,[0,2,8],0,0]],caml_string_of_jsbytes("#%08lx")],
     _C_=[0,[2,0,[12,58,0]],caml_string_of_jsbytes("%s:")],
     _p_=[0,951901561,0],
     _q_=[0,504440814,0],
     _n_=[0,caml_string_of_jsbytes("src/bi_io.ml"),270,4],
     _o_=[0,caml_string_of_jsbytes("src/bi_io.ml"),274,4],
     _m_=[0,caml_string_of_jsbytes("src/bi_io.ml"),212,11],
     _k_=
      [0,
       [11,
        caml_string_of_jsbytes("Bi_io.make_unhash: "),
        [3,
         0,
         [11,
          caml_string_of_jsbytes(" and "),
          [3,
           0,
           [11,
            caml_string_of_jsbytes
             (" have the same hash, please pick another name"),
            0]]]]],
       caml_string_of_jsbytes
        ("Bi_io.make_unhash: %S and %S have the same hash, please pick another name")],
     _l_=[0,caml_string_of_jsbytes("src/bi_io.ml"),169,13],
     _H_=[0,caml_string_of_jsbytes("src/bi_io.ml"),85,2],
     _G_=[0,[2,0,[12,10,0]],caml_string_of_jsbytes("%s\n")],
     _F_=[0,[2,0,[12,10,0]],caml_string_of_jsbytes("%s\n")],
     _E_=
      [0,
       [11,
        caml_string_of_jsbytes("Cannot load dictionary from "),
        [3,0,[11,caml_string_of_jsbytes(": "),[2,0,[12,10,[10,0]]]]]],
       caml_string_of_jsbytes("Cannot load dictionary from %S: %s\n%!")];
    function error(s){throw [0,Error,s]}
    function string8_of_int(x)
     {var s=caml_create_bytes(8),i=0;
      for(;;)
       {caml_bytes_set
         (s,
          7 - i | 0,
          caml_call1(Stdlib_char[1],255 & (x >>> (8 * i | 0) | 0)));
        var _c4_=i + 1 | 0;
        if(7 !== i){var i=_c4_;continue}
        return caml_call1(Stdlib_bytes[6],s)}}
    function string4_of_int(x)
     {var s=caml_create_bytes(4),i=0;
      for(;;)
       {caml_bytes_set
         (s,
          3 - i | 0,
          caml_call1(Stdlib_char[1],255 & (x >>> (8 * i | 0) | 0)));
        var _c3_=i + 1 | 0;
        if(3 !== i){var i=_c3_;continue}
        return caml_call1(Stdlib_bytes[6],s)}}
    function print_bits(opt,len,s)
     {if(opt)var sth=opt[1],pos=sth;else var pos=0;
      var slen=caml_ml_string_length(s),_cT_=pos < 0?1:0;
      if(_cT_)
       var _cU_=_cT_;
      else
       var _c2_=0 < pos?1:0,_cU_=_c2_?slen <= pos?1:0:_c2_;
      if(_cU_)caml_call1(Stdlib[1],cst_Bi_util_print_bits);
      if(len)
       var
        len$0=len[1],
        _cV_=
         (slen - pos | 0) < len$0
          ?caml_call1(Stdlib[1],cst_Bi_util_print_bits$0)
          :len$0,
        len$1=_cV_;
      else
       var len$1=slen - pos | 0;
      var r=caml_create_bytes(len$1 * 9 | 0),_cX_=len$1 - 1 | 0,_cW_=0;
      if(! (_cX_ < 0))
       {var i=_cW_;
        a:
        for(;;)
         {var k=i * 9 | 0,x=caml_string_get(s,pos + i | 0),j=0;
          for(;;)
           {var _c0_=0 === ((x >>> (7 - j | 0) | 0) & 1)?48:49;
            caml_bytes_set(r,k + j | 0,_c0_);
            var _c1_=j + 1 | 0;
            if(7 !== j){var j=_c1_;continue}
            var _cY_=0 === ((i + 1 | 0) % 8 | 0)?10:32;
            caml_bytes_set(r,k + 8 | 0,_cY_);
            var _cZ_=i + 1 | 0;
            if(_cX_ !== i){var i=_cZ_;continue a}
            break}
          break}}
      return caml_call1(Stdlib_bytes[6],r)}
    var c=[0,0],r=[0,-1];
    for(;;)
     {if(0 === r[1])
       {var
         int_size=c[1],
         Bi_util=
          [0,Error,error,string8_of_int,string4_of_int,print_bits,int_size];
        caml_register_global(101,Bi_util,"Bi_util");
        var
         n=[0,0],
         dummy_type_id=0,
         create_type_id=
          function(param)
           {n[1]++;
            return 0 <= n[1]
                    ?n[1]
                    :caml_call1(Stdlib[2],cst_Bi_share_Rd_poly_create_ty)},
         equal=
          function(param,_cQ_)
           {var
             t2=_cQ_[2],
             x2=_cQ_[1],
             t1=param[2],
             x1=param[1],
             _cR_=x1 === x2?1:0,
             _cS_=_cR_?t1 === t2?1:0:_cR_;
            return _cS_},
         hash=Stdlib_hashtbl[27],
         H=caml_call1(Stdlib_hashtbl[25],[0,equal,hash]),
         create=H[1],
         clear=
          function(tbl)
           {var _cP_=0 < caml_call1(H[15],tbl)?1:0;
            return _cP_?caml_call1(H[2],tbl):_cP_},
         put=
          function(tbl,k,pos)
           {try
             {var pos0=caml_call2(H[7],tbl,k),_cN_=pos - pos0 | 0;return _cN_}
            catch(_cO_)
             {_cO_ = caml_wrap_exception(_cO_);
              if(_cO_ === Stdlib[8]){caml_call3(H[5],tbl,k,pos);return 0}
              throw _cO_}},
         create$0=function(n){return caml_call2(Stdlib_hashtbl[1],0,n)},
         clear$0=Stdlib_hashtbl[2],
         put$0=
          function(tbl,pos,x){return caml_call3(Stdlib_hashtbl[5],tbl,pos,x)},
         get=
          function(tbl,pos)
           {try
             {var _cL_=caml_call2(Stdlib_hashtbl[6],tbl,pos);return _cL_}
            catch(_cM_)
             {_cM_ = caml_wrap_exception(_cM_);
              if(_cM_ === Stdlib[8])
               return error(cst_Corrupted_data_invalid_ref);
              throw _cM_}},
         Rd=[0,create$0,clear$0,put$0,get],
         _a_=[0,create,clear,put],
         Bi_share=[0,dummy_type_id,create_type_id,_a_,Rd];
        caml_register_global(103,Bi_share,"Bi_share");
        var
         End_of_input=[248,cst_Bi_inbuf_End_of_input,caml_fresh_oo_id(0)],
         try_preread=
          function(ib,n)
           {return (ib[3] - ib[2] | 0) < n
                    ?(caml_call2(ib[6],ib,n),
                      caml_call2(Stdlib[16],ib[3] - ib[2] | 0,n))
                    :n},
         read=
          function(ib,n)
           {var pos=ib[2];
            if(n <= (ib[3] - pos | 0)){ib[2] = pos + n | 0;return pos}
            if(n <= try_preread(ib,n))
             {var pos$0=ib[2];ib[2] = ib[2] + n | 0;return pos$0}
            throw End_of_input},
         read_char=
          function(ib)
           {var pos=ib[2];
            if(0 < (ib[3] - pos | 0))
             {var c=caml_bytes_unsafe_get(ib[1],pos);
              ib[2] = pos + 1 | 0;
              return c}
            if(0 < try_preread(ib,1))
             {var pos$0=ib[2],c$0=caml_bytes_unsafe_get(ib[1],pos$0);
              ib[2] = pos$0 + 1 | 0;
              return c$0}
            throw End_of_input},
         peek=
          function(ib)
           {var pos=ib[2];
            if(0 < (ib[3] - pos | 0))return caml_bytes_unsafe_get(ib[1],pos);
            if(0 < try_preread(ib,1))
             return caml_bytes_unsafe_get(ib[1],ib[2]);
            throw End_of_input},
         from_bytes=
          function(opt,_cJ_,s)
           {if(opt)var sth=opt[1],pos=sth;else var pos=0;
            if(_cJ_)var sth$0=_cJ_[1],shrlen=sth$0;else var shrlen=16;
            var _cK_=caml_call1(Rd[1],shrlen);
            return [0,
                    s,
                    pos,
                    caml_ml_bytes_length(s),
                    - pos | 0,
                    caml_ml_bytes_length(s),
                    function(ib,n){return 0},
                    _cK_]},
         from_string=
          function(pos,shrlen,s)
           {return from_bytes(pos,shrlen,caml_call1(Stdlib_bytes[5],s))},
         from_channel=
          function(opt,_cF_,ic)
           {if(opt)var sth=opt[1],len=sth;else var len=4096;
            if(_cF_)var sth$0=_cF_[1],shrlen=sth$0;else var shrlen=16;
            var _cG_=caml_call1(Rd[1],shrlen);
            return [0,
                    caml_create_bytes(len),
                    0,
                    0,
                    0,
                    len,
                    function(ib,n$0)
                     {if(ib[5] < n$0)
                       return caml_call1(Stdlib[1],cst_Bi_inbuf_refill_from_chann);
                      var pos$1=ib[3] - ib[2] | 0,_cH_=pos$1 < n$0?1:0;
                      if(_cH_)
                       {var s=ib[1];
                        caml_call5(Stdlib_bytes[11],s,ib[2],s,0,pos$1);
                        var len$1=n$0 - pos$1 | 0,pos=pos$1,len=len$1,accu=0;
                        for(;;)
                         {var n=caml_call4(Stdlib[84],ic,s,pos,len);
                          if(n < len && 0 < n)
                           {var
                             accu$0=accu + n | 0,
                             len$0=len - n | 0,
                             pos$0=pos + n | 0,
                             pos=pos$0,
                             len=len$0,
                             accu=accu$0;
                            continue}
                          var really_read=accu + n | 0;
                          ib[4] = ib[4] + ib[2] | 0;
                          ib[2] = 0;
                          ib[3] = pos$1 + really_read | 0;
                          var _cI_=0;
                          break}}
                      else
                       var _cI_=_cH_;
                      return _cI_},
                    _cG_]},
         Bi_inbuf=
          [0,
           End_of_input,
           try_preread,
           read,
           read_char,
           peek,
           from_string,
           from_bytes,
           from_channel];
        caml_register_global(104,Bi_inbuf,"Bi_inbuf");
        var
         really_extend=
          function(b,n)
           {var
             slen0=b[2],
             reqlen=b[3] + n | 0,
             x=caml_call2(Stdlib[17],reqlen,2 * slen0 | 0),
             slen=
              x <= Stdlib_sys[12]
               ?x
               :Stdlib_sys[12] < reqlen
                 ?caml_call1(Stdlib[1],cst_Buf_extend_reached_Sys_max)
                 :Stdlib_sys[12],
             s=caml_create_bytes(slen);
            caml_call5(Stdlib_bytes[11],b[1],0,s,0,b[3]);
            b[1] = s;
            b[2] = slen;
            return 0},
         flush_to_output=
          function(abstract_output,b,n)
           {var _cD_=b[3];
            caml_call3
             (abstract_output,caml_call1(Stdlib_bytes[6],b[1]),0,_cD_);
            b[4] = b[4] + b[3] | 0;
            b[3] = 0;
            var _cE_=b[2] < n?1:0;
            return _cE_?really_extend(b,n):_cE_},
         flush_to_channel=
          function(oc)
           {var _cA_=caml_call1(Stdlib[69],oc);
            return function(_cB_,_cC_){return flush_to_output(_cA_,_cB_,_cC_)}},
         create$1=
          function(opt,_cz_,n)
           {if(opt)
             var sth=opt[1],make_room=sth;
            else
             var make_room=really_extend;
            if(_cz_)var sth$0=_cz_[1],shrlen=sth$0;else var shrlen=16;
            return [0,
                    caml_create_bytes(n),
                    n,
                    0,
                    0,
                    n,
                    make_room,
                    caml_call1(_a_[1],shrlen),
                    shrlen]},
         create_channel_writer=
          function(opt,shrlen,oc)
           {if(opt)var sth=opt[1],len=sth;else var len=4096;
            return create$1([0,flush_to_channel(oc)],shrlen,len)},
         flush_output_writer=function(b){return caml_call2(b[6],b,0)},
         create_output_writer=
          function(opt,shrlen,out)
           {if(opt)var sth=opt[1],len=sth;else var len=4096;
            var
             _cw_=
              caml_call1(runtime.caml_get_public_method(out,209784577,1),out);
            return create$1
                    ([0,
                      function(_cx_,_cy_){return flush_to_output(_cw_,_cx_,_cy_)}],
                     shrlen,
                     len)},
         extend=
          function(b,n)
           {var _cv_=b[2] < (b[3] + n | 0)?1:0;
            return _cv_?caml_call2(b[6],b,n):_cv_},
         alloc=
          function(b,n)
           {extend(b,n);var pos=b[3];b[3] = pos + n | 0;return pos},
         add_sub=
          function(blit,b,s,pos,len)
           {extend(b,len);
            caml_call5(blit,s,pos,b[1],b[3],len);
            b[3] = b[3] + len | 0;
            return 0},
         _b_=Stdlib_string[6],
         add_substring=
          function(_cr_,_cs_,_ct_,_cu_)
           {return add_sub(_b_,_cr_,_cs_,_ct_,_cu_)},
         _c_=Stdlib_bytes[11],
         add_subbytes=
          function(_cn_,_co_,_cp_,_cq_)
           {return add_sub(_c_,_cn_,_co_,_cp_,_cq_)},
         add_string=
          function(b,s){return add_substring(b,s,0,caml_ml_string_length(s))},
         add_bytes=
          function(b,s){return add_subbytes(b,s,0,caml_ml_bytes_length(s))},
         add_char=
          function(b,c){var pos=alloc(b,1);return caml_bytes_set(b[1],pos,c)},
         unsafe_add_char=
          function(b,c)
           {var len=b[3];
            caml_bytes_set(b[1],len,c);
            b[3] = len + 1 | 0;
            return 0},
         add_char2=
          function(b,c1,c2)
           {var pos=alloc(b,2),s=b[1];
            caml_bytes_unsafe_set(s,pos,c1);
            caml_bytes_unsafe_set(s,pos + 1 | 0,c2);
            return 0},
         add_char4=
          function(b,c1,c2,c3,c4)
           {var pos=alloc(b,4),s=b[1];
            caml_bytes_unsafe_set(s,pos,c1);
            caml_bytes_unsafe_set(s,pos + 1 | 0,c2);
            caml_bytes_unsafe_set(s,pos + 2 | 0,c3);
            caml_bytes_unsafe_set(s,pos + 3 | 0,c4);
            return 0},
         clear$1=function(b){b[4] = 0;b[3] = 0;return caml_call1(_a_[2],b[7])},
         reset=
          function(b)
           {if(caml_ml_bytes_length(b[1]) !== b[5])
             b[1] = caml_create_bytes(b[5]);
            b[4] = 0;
            b[3] = 0;
            b[7] = caml_call1(_a_[1],b[8]);
            return 0},
         contents=function(b){return caml_call3(Stdlib_bytes[8],b[1],0,b[3])},
         Bi_outbuf=
          [0,
           really_extend,
           flush_to_channel,
           create$1,
           contents,
           create_channel_writer,
           flush_output_writer,
           create_output_writer,
           flush_output_writer,
           extend,
           alloc,
           add_bytes,
           add_subbytes,
           add_string,
           add_substring,
           add_char,
           add_char2,
           add_char4,
           unsafe_add_char,
           clear$1,
           reset];
        caml_register_global(107,Bi_outbuf,"Bi_outbuf");
        if(0 === (int_size % 7 | 0))
         var m=int_size / 7 | 0,max_highest_byte=127,max_vint_bytes=m;
        else
         var
          m$0=(int_size / 7 | 0) + 1 | 0,
          h=(1 << (int_size % 7 | 0)) - 1 | 0,
          max_highest_byte=h,
          max_vint_bytes=m$0;
        var
         check_highest_byte=
          function(x)
           {var _cm_=max_highest_byte < x?1:0;
            return _cm_?error(cst_Vint_exceeding_range_of_OC):_cm_},
         unsigned_of_signed=
          function(i){return 0 <= i?i << 1:(-1 - i | 0) << 1 | 1},
         write_untagged_uvint=
          function(buf,i)
           {extend(buf,max_vint_bytes);
            var x=[0,i];
            for(;;)
             {if(0 === (x[1] >>> 7 | 0))
               return unsafe_add_char(buf,caml_call1(Stdlib_char[1],x[1]));
              var byte$0=128 | x[1] & 127;
              unsafe_add_char(buf,caml_call1(Stdlib_char[1],byte$0));
              x[1] = x[1] >>> 7 | 0;
              continue}},
         write_untagged_svint=
          function(buf,i)
           {return write_untagged_uvint(buf,unsigned_of_signed(i))},
         uvint_of_uint=
          function(buf,i)
           {if(buf)var b=buf[1],buffer=b;else var buffer=create$1(0,0,10);
            clear$1(buffer);
            write_untagged_uvint(buffer,i);
            return contents(buffer)},
         svint_of_int=
          function(buf,i){return uvint_of_uint(buf,unsigned_of_signed(i))},
         read_untagged_uvint=
          function(ib)
           {var
             avail=try_preread(ib,max_vint_bytes),
             s=ib[1],
             pos=ib[2],
             x=[0,0];
            try
             {var _cj_=avail - 1 | 0,_ci_=0;
              if(! (_cj_ < 0))
               {var i=_ci_;
                for(;;)
                 {var b=caml_bytes_get(s,pos + i | 0);
                  x[1] = (b & 127) << (7 * i | 0) | x[1];
                  if(b < 128)
                   {ib[2] = (pos + i | 0) + 1 | 0;
                    if((i + 1 | 0) === max_vint_bytes)check_highest_byte(b);
                    throw Stdlib[3]}
                  var _ck_=i + 1 | 0;
                  if(_cj_ !== i){var i=_ck_;continue}
                  break}}
              error(cst_Unterminated_vint_or_vint_)}
            catch(_cl_)
             {_cl_ = caml_wrap_exception(_cl_);
              if(_cl_ !== Stdlib[3])throw _cl_}
            return x[1]},
         read_untagged_svint=
          function(ib)
           {var i=read_untagged_uvint(ib);
            return 0 === (i & 1)?i >>> 1 | 0:-1 - (i >>> 1 | 0) | 0},
         check_end_of_input=
          function(ib)
           {var _ch_=0 < try_preread(ib,1)?1:0;
            return _ch_?error(cst_Junk_input_after_end_of_vi):_ch_},
         uint_of_uvint=
          function(s)
           {var ib=from_string(0,0,s),x=read_untagged_uvint(ib);
            check_end_of_input(ib);
            return x},
         int_of_svint=
          function(s)
           {var ib=from_string(0,0,s),x=read_untagged_svint(ib);
            check_end_of_input(ib);
            return x},
         Bi_vint=
          [0,
           uvint_of_uint,
           svint_of_int,
           uint_of_uvint,
           int_of_svint,
           write_untagged_uvint,
           write_untagged_svint,
           read_untagged_uvint,
           read_untagged_svint];
        caml_register_global(110,Bi_vint,"Bi_vint");
        var
         error$0=
          function(s)
           {var _cg_=caml_call2(Stdlib[28],cst_Bi_stream,s);
            return caml_call1(Stdlib[2],_cg_)},
         read_stream=
          function(of_string,ic)
           {function _b__(i$2)
             {var c=caml_call1(Stdlib[82],ic);
              if(1 === c)
               {var _ca_=Stdlib_sys[9];
                if(32 === _ca_)
                 {var i$0=1;
                  for(;;)
                   {if(0 !== caml_call1(Stdlib[87],ic))
                     error$0(cst_Chunk_length_exceeds_suppo$0);
                    var _cd_=i$0 + 1 | 0;
                    if(4 !== i$0){var i$0=_cd_;continue}
                    var n=[0,0],i=1;
                    for(;;)
                     {var _cb_=caml_call1(Stdlib[87],ic);
                      n[1] = n[1] << 8 | _cb_;
                      var _cc_=i + 1 | 0;
                      if(4 !== i){var i=_cc_;continue}
                      if(n[1] < 0)error$0(cst_Chunk_length_exceeds_suppo);
                      var len=n[1];
                      break}
                    break}}
                else
                 if(64 === _ca_)
                  {var n$0=[0,0],i$1=1;
                   for(;;)
                    {var _ce_=caml_call1(Stdlib[87],ic);
                     n$0[1] = n$0[1] << 8 | _ce_;
                     var _cf_=i$1 + 1 | 0;
                     if(8 !== i$1){var i$1=_cf_;continue}
                     if(n$0[1] < 0)error$0(cst_Corrupted_stream_excessive);
                     var len=n$0[1];
                     break}}
                 else
                  var len=error$0(caml_call2(Stdlib_printf[4],_d_,_ca_));
                if(Stdlib_sys[12] < len)
                 error$0(caml_call2(Stdlib_printf[4],_f_,len));
                var s=caml_create_bytes(len);
                caml_call4(Stdlib[85],ic,s,0,len);
                return [0,caml_call1(of_string,caml_call1(Stdlib_bytes[6],s))]}
              return c?error$0(caml_call2(Stdlib_printf[4],_g_,c)):0}
            var st=caml_call1(Stdlib_stream[3],_b__),a=[0,[0]],pos=[0,0];
            function next(i)
             {for(;;)
               {if(a[1].length - 1 <= pos[1])
                 {var match=caml_call1(Stdlib_stream[11],st);
                  if(match)
                   {var a$0=match[1];
                    caml_call1(Stdlib_stream[12],st);
                    a[1] = a$0;
                    pos[1] = 0;
                    continue}
                  return 0}
                var _b$_=pos[1],x=caml_check_bound(a[1],_b$_)[1 + _b$_];
                pos[1]++;
                return [0,x]}}
            return caml_call1(Stdlib_stream[3],next)},
         write_stream=
          function(opt,to_string,oc,st)
           {if(opt)var sth=opt[1],chunk_len=sth;else var chunk_len=1024;
            var n=[0,0],acc=[0,0];
            function flush_chunk(param)
             {var _b9_=acc[1];
              if(_b9_)
               {var
                 tl=_b9_[2],
                 x=_b9_[1],
                 r=[0,tl],
                 len=caml_call1(Stdlib_list[1],_b9_),
                 a=caml_make_vect(len,x),
                 _b6_=len - 2 | 0;
                if(! (_b6_ < 0))
                 {var i$1=_b6_;
                  for(;;)
                   {var _b7_=r[1];
                    if(! _b7_)throw [0,Assert_failure,_h_];
                    var tl$0=_b7_[2],hd=_b7_[1];
                    caml_check_bound(a,i$1)[1 + i$1] = hd;
                    r[1] = tl$0;
                    var _b8_=i$1 - 1 | 0;
                    if(0 !== i$1){var i$1=_b8_;continue}
                    break}}
                var a$0=a}
              else
               var a$0=[0];
              acc[1] = 0;
              n[1] = 0;
              var s=caml_call1(to_string,a$0);
              caml_call2(Stdlib[65],oc,1);
              var n$2=caml_ml_string_length(s),_b1_=Stdlib_sys[9];
              if(32 === _b1_)
               {caml_call2(Stdlib[66],oc,cst);
                var n$0=[0,n$2],i=1;
                for(;;)
                 {var _b2_=caml_call1(Stdlib[29],n$0[1] >>> 24 | 0);
                  caml_call2(Stdlib[65],oc,_b2_);
                  n$0[1] = n$0[1] << 8;
                  var _b3_=i + 1 | 0;
                  if(4 !== i){var i=_b3_;continue}
                  break}}
              else
               if(64 === _b1_)
                {var n$1=[0,n$2],i$0=1;
                 for(;;)
                  {var _b4_=caml_call1(Stdlib[29],n$1[1] >>> 56 | 0);
                   caml_call2(Stdlib[65],oc,_b4_);
                   n$1[1] = n$1[1] << 8;
                   var _b5_=i$0 + 1 | 0;
                   if(8 !== i$0){var i$0=_b5_;continue}
                   break}}
               else
                error$0(caml_call2(Stdlib_printf[4],_e_,_b1_));
              return caml_call2(Stdlib[66],oc,s)}
            function _bZ_(x)
             {n[1]++;
              acc[1] = [0,x,acc[1]];
              var _b0_=chunk_len <= n[1]?1:0;
              return _b0_?flush_chunk(0):_b0_}
            caml_call2(Stdlib_stream[8],_bZ_,st);
            if(0 < n[1])flush_chunk(0);
            return caml_call2(Stdlib[65],oc,0)},
         test=
          function(l)
           {function _bT_(x)
             {if(0 <= x && ! (9 < x))return 0;throw [0,Assert_failure,_i_]}
            caml_call2(Stdlib_list[15],_bT_,l);
            function to_string(a)
             {var
               _bX_=caml_call1(Stdlib_array[11],a),
               _bY_=caml_call2(Stdlib_list[17],Stdlib[33],_bX_);
              return caml_call2(Stdlib_string[7],cst$0,_bY_)}
            function of_string(s)
             {function _bV_(i)
               {var _bW_=caml_string_get(s,i);
                return runtime.caml_int_of_string
                        (caml_call2(Stdlib_string[1],1,_bW_))}
              return caml_call2(Stdlib_array[2],caml_ml_string_length(s),_bV_)}
            var
             st=caml_call1(Stdlib_stream[4],l),
             oc=caml_call1(Stdlib[60],cst_test_stream_dat);
            write_stream(_j_,to_string,oc,st);
            caml_call1(Stdlib[76],oc);
            var
             ic=caml_call1(Stdlib[79],cst_test_stream_dat$0),
             st$0=read_stream(of_string,ic),
             l$0=[0,0];
            function _bU_(i){l$0[1] = [0,i,l$0[1]];return 0}
            caml_call2(Stdlib_stream[8],_bU_,st$0);
            caml_call1(Stdlib[93],ic);
            return runtime.caml_equal(l,caml_call1(Stdlib_list[9],l$0[1]))},
         Bi_stream=[0,read_stream,write_stream,test];
        caml_register_global(114,Bi_stream,"Bi_stream");
        var
         bool_tag=0,
         int8_tag=1,
         int16_tag=2,
         int32_tag=3,
         int64_tag=4,
         float32_tag=11,
         float64_tag=12,
         uvint_tag=16,
         svint_tag=17,
         string_tag=18,
         array_tag=19,
         tuple_tag=20,
         record_tag=21,
         num_variant_tag=22,
         variant_tag=23,
         unit_tag=24,
         table_tag=25,
         shared_tag=26,
         make_signed=function(x){return 1073741823 < x?x + 2147483648 | 0:x},
         hash_name=
          function(s)
           {var accu=[0,0],_bQ_=caml_ml_string_length(s) - 1 | 0,_bP_=0;
            if(! (_bQ_ < 0))
             {var i=_bP_;
              for(;;)
               {var _bR_=caml_string_get(s,i);
                accu[1] = (223 * accu[1] | 0) + _bR_ | 0;
                var _bS_=i + 1 | 0;
                if(_bQ_ !== i){var i=_bS_;continue}
                break}}
            accu[1] = accu[1] & 2147483647;
            return make_signed(accu[1])},
         n$0=int_size - 31 | 0;
        if(0 <= n$0)
         {var
           write_hashtag=
            function(ob,h$0,has_arg)
             {var h=h$0 << n$0 >>> n$0 | 0,pos=alloc(ob,4),s=ob[1];
              caml_bytes_unsafe_set
               (s,pos + 3 | 0,caml_call1(Stdlib_char[1],h & 255));
              var h$1=h >>> 8 | 0;
              caml_bytes_unsafe_set
               (s,pos + 2 | 0,caml_call1(Stdlib_char[1],h$1 & 255));
              var h$2=h$1 >>> 8 | 0;
              caml_bytes_unsafe_set
               (s,pos + 1 | 0,caml_call1(Stdlib_char[1],h$2 & 255));
              var h$3=h$2 >>> 8 | 0,_bO_=has_arg?h$3 | 128:h$3;
              caml_bytes_unsafe_set(s,pos,caml_call1(Stdlib_char[1],_bO_));
              return 0},
           string_of_hashtag=
            function(h,has_arg)
             {var ob=create$1(0,0,4);
              write_hashtag(ob,h,has_arg);
              return contents(ob)},
           read_hashtag=
            function(ib,cont)
             {var
               i=read(ib,4),
               s=ib[1],
               x0=caml_bytes_get(s,i),
               has_arg=128 <= x0?1:0,
               x1=(x0 & 127) << 24,
               x2=caml_bytes_get(s,i + 1 | 0) << 16,
               x3=caml_bytes_get(s,i + 2 | 0) << 8,
               x4=caml_bytes_get(s,i + 3 | 0),
               h=make_signed(x1 | x2 | x3 | x4);
              return caml_call3(cont,ib,h,has_arg)},
           read_field_hashtag=
            function(ib)
             {var i=read(ib,4),s=ib[1],x0=caml_bytes_unsafe_get(s,i);
              if(x0 < 128)error(cst_Corrupted_data_invalid_fie);
              var
               x1=(x0 & 127) << 24,
               x2=caml_bytes_unsafe_get(s,i + 1 | 0) << 16,
               x3=caml_bytes_unsafe_get(s,i + 2 | 0) << 8,
               x4=caml_bytes_unsafe_get(s,i + 3 | 0);
              return make_signed(x1 | x2 | x3 | x4)},
           write_numtag=
            function(ob,i,has_arg)
             {var _bM_=i < 0?1:0,_bN_=_bM_ || (127 < i?1:0);
              if(_bN_)error(cst_Corrupted_data_invalid_num);
              var x=has_arg?i | 128:i;
              return add_char(ob,caml_call1(Stdlib_char[1],x))},
           read_numtag=
            function(ib,cont)
             {var i=read(ib,1),x=caml_bytes_get(ib[1],i),has_arg=128 <= x?1:0;
              return caml_call3(cont,ib,x & 127,has_arg)},
           make_unhash=
            function(l)
             {var
               _bE_=4 * caml_call1(Stdlib_list[1],l) | 0,
               tbl=caml_call2(Stdlib_hashtbl[1],0,_bE_);
              function _bF_(s)
               {var h=hash_name(s);
                try
                 {var match=caml_call2(Stdlib_hashtbl[6],tbl,h);
                  if(match)
                   {var s$0=match[1],_bI_=caml_string_notequal(s,s$0);
                    if(_bI_)
                     var
                      _bJ_=caml_call3(Stdlib_printf[4],_k_,s,s$0),
                      _bK_=caml_call1(Stdlib[2],_bJ_);
                    else
                     var _bK_=_bI_;
                    return _bK_}
                  throw [0,Assert_failure,_l_]}
                catch(_bL_)
                 {_bL_ = caml_wrap_exception(_bL_);
                  if(_bL_ === Stdlib[8])
                   return caml_call3(Stdlib_hashtbl[5],tbl,h,[0,s]);
                  throw _bL_}}
              caml_call2(Stdlib_list[15],_bF_,l);
              return function(h)
               {try
                 {var _bG_=caml_call2(Stdlib_hashtbl[6],tbl,h);return _bG_}
                catch(_bH_)
                 {_bH_ = caml_wrap_exception(_bH_);
                  if(_bH_ === Stdlib[8])return 0;
                  throw _bH_}}},
           write_tag=
            function(ob,x){return add_char(ob,caml_call1(Stdlib_char[1],x))},
           write_untagged_unit=function(ob,param){return add_char(ob,0)},
           write_untagged_bool=
            function(ob,x){var _bD_=x?1:0;return add_char(ob,_bD_)},
           write_untagged_char=function(ob,x){return add_char(ob,x)},
           write_untagged_int8=
            function(ob,x){return add_char(ob,caml_call1(Stdlib_char[1],x))},
           write_untagged_int16=
            function(ob,x)
             {add_char(ob,caml_call1(Stdlib_char[1],x >>> 8 | 0));
              return add_char(ob,caml_call1(Stdlib_char[1],x & 255))},
           write_untagged_int32=
            function(ob,low)
             {var high=low >>> 16 | 0;
              add_char(ob,caml_call1(Stdlib_char[1],high >>> 8 | 0));
              add_char(ob,caml_call1(Stdlib_char[1],high & 255));
              add_char(ob,caml_call1(Stdlib_char[1],(low >>> 8 | 0) & 255));
              return add_char(ob,caml_call1(Stdlib_char[1],low & 255))},
           write_untagged_float32=
            function(ob,x)
             {return write_untagged_int32
                      (ob,runtime.caml_int32_bits_of_float(x))},
           float_endianness=
            [246,
             function(_bC_)
              {var match=caml_string_unsafe_get(1.,0);
               if(63 === match)return 3305632;
               if(match)throw [0,Assert_failure,_m_];
               return 624392470}],
           read_untagged_float64=
            function(ib)
             {var
               i=read(ib,8),
               s=ib[1],
               x=runtime.caml_obj_block(Stdlib_obj[14],8),
               _by_=caml_obj_tag(float_endianness),
               _bz_=
                250 === _by_
                 ?float_endianness[1]
                 :246 === _by_
                   ?caml_call1(CamlinternalLazy[2],float_endianness)
                   :float_endianness;
              if(624392470 <= _bz_)
               {var j=0;
                for(;;)
                 {caml_bytes_unsafe_set
                   (x,7 - j | 0,caml_bytes_unsafe_get(s,i + j | 0));
                  var _bA_=j + 1 | 0;
                  if(7 !== j){var j=_bA_;continue}
                  break}}
              else
               {var j$0=0;
                for(;;)
                 {caml_bytes_unsafe_set
                   (x,j$0,caml_bytes_unsafe_get(s,i + j$0 | 0));
                  var _bB_=j$0 + 1 | 0;
                  if(7 !== j$0){var j$0=_bB_;continue}
                  break}}
              return x},
           write_untagged_float64=
            function(ob,x)
             {var
               i=alloc(ob,8),
               s=ob[1],
               _bu_=caml_obj_tag(float_endianness),
               _bv_=
                250 === _bu_
                 ?float_endianness[1]
                 :246 === _bu_
                   ?caml_call1(CamlinternalLazy[2],float_endianness)
                   :float_endianness;
              if(624392470 <= _bv_)
               {var j=0;
                for(;;)
                 {caml_bytes_unsafe_set
                   (s,i + j | 0,caml_string_unsafe_get(x,7 - j | 0));
                  var _bw_=j + 1 | 0;
                  if(7 !== j){var j=_bw_;continue}
                  return 0}}
              var j$0=0;
              for(;;)
               {caml_bytes_unsafe_set
                 (s,i + j$0 | 0,caml_string_unsafe_get(x,j$0));
                var _bx_=j$0 + 1 | 0;
                if(7 !== j$0){var j$0=_bx_;continue}
                return 0}},
           write_untagged_int64=
            function(ob,x)
             {return write_untagged_float64
                      (ob,runtime.caml_int64_float_of_bits(x))},
           safety_test=
            function(param)
             {var
               y=read_untagged_float64(from_string(0,0,s)),
               x=1.00146962706651288;
              if(1.00146962706651288 != y)throw [0,Assert_failure,_n_];
              var ob=create$1(0,0,8);
              write_untagged_float64(ob,x);
              var _bt_=caml_string_notequal(contents(ob),s);
              if(_bt_)throw [0,Assert_failure,_o_];
              return _bt_},
           write_untagged_string=
            function(ob,s)
             {write_untagged_uvint(ob,caml_ml_string_length(s));
              return add_string(ob,s)},
           write_unit=
            function(ob,param)
             {write_tag(ob,unit_tag);return write_untagged_unit(ob,0)},
           write_bool=
            function(ob,x)
             {write_tag(ob,bool_tag);return write_untagged_bool(ob,x)},
           write_char=
            function(ob,x)
             {write_tag(ob,int8_tag);return write_untagged_char(ob,x)},
           write_int8=
            function(ob,x)
             {write_tag(ob,int8_tag);return write_untagged_int8(ob,x)},
           write_int16=
            function(ob,x)
             {write_tag(ob,int16_tag);return write_untagged_int16(ob,x)},
           write_int32=
            function(ob,x)
             {write_tag(ob,int32_tag);return write_untagged_int32(ob,x)},
           write_int64=
            function(ob,x)
             {write_tag(ob,int64_tag);return write_untagged_int64(ob,x)},
           write_float32=
            function(ob,x)
             {write_tag(ob,float32_tag);return write_untagged_float32(ob,x)},
           write_float64=
            function(ob,x)
             {write_tag(ob,float64_tag);return write_untagged_float64(ob,x)},
           write_string=
            function(ob,x)
             {write_tag(ob,string_tag);return write_untagged_string(ob,x)},
           write_uvint=
            function(ob,x)
             {write_tag(ob,uvint_tag);return write_untagged_uvint(ob,x)},
           write_svint=
            function(ob,x)
             {write_tag(ob,svint_tag);return write_untagged_svint(ob,x)},
           write_t=
            function(ob,tagged,x)
             {var tagged$0=tagged,x$0=x;
              for(;;)
               {if(typeof x$0 === "number")
                 {if(tagged$0)write_tag(ob,unit_tag);
                  return write_untagged_unit(ob,0)}
                var _a__=x$0[1];
                if(708012133 <= _a__)
                 {if(847309489 <= _a__)
                   {if(928626971 === _a__)
                     {var x$1=x$0[2];
                      if(tagged$0)write_tag(ob,float32_tag);
                      return write_untagged_float32(ob,x$1)}
                    if(951901561 <= _a__)
                     {if(1063160078 <= _a__)
                       {var x$2=x$0[2];
                        if(tagged$0)write_tag(ob,uvint_tag);
                        return write_untagged_uvint(ob,x$2)}
                      var o=x$0[2];
                      if(tagged$0)write_tag(ob,array_tag);
                      if(o)
                       {var
                         match=o[1],
                         a=match[2],
                         node_tag=match[1],
                         len=a.length - 1;
                        write_untagged_uvint(ob,len);
                        var _a$_=0 < len?1:0;
                        if(_a$_)
                         {write_tag(ob,node_tag);
                          var
                           _ba_=0,
                           _bb_=function(_bs_){return write_t(ob,_ba_,_bs_)};
                          return caml_call2(Stdlib_array[13],_bb_,a)}
                        return _a$_}
                      return write_untagged_uvint(ob,0)}
                    if(928627642 <= _a__)
                     {var x$3=x$0[2];
                      if(tagged$0)write_tag(ob,float64_tag);
                      return write_untagged_float64(ob,x$3)}
                    var a$0=x$0[2];
                    if(tagged$0)write_tag(ob,record_tag);
                    write_untagged_uvint(ob,a$0.length - 1);
                    var
                     _bc_=
                      function(param)
                       {var x=param[3],h=param[2];
                        write_hashtag(ob,h,1);
                        return write_t(ob,1,x)};
                    return caml_call2(Stdlib_array[13],_bc_,a$0)}
                  if(737456202 <= _a__)
                   {if(815034505 <= _a__)
                     {var x$4=x$0[2];
                      if(tagged$0)write_tag(ob,int8_tag);
                      return write_untagged_char(ob,x$4)}
                    var x$5=x$0[2];
                    if(tagged$0)write_tag(ob,bool_tag);
                    return write_untagged_bool(ob,x$5)}
                  if(726928360 <= _a__)
                   {var a$1=x$0[2];
                    if(tagged$0)write_tag(ob,tuple_tag);
                    write_untagged_uvint(ob,a$1.length - 1);
                    var
                     _bd_=1,
                     _be_=function(_br_){return write_t(ob,_bd_,_br_)};
                    return caml_call2(Stdlib_array[13],_be_,a$1)}
                  var match$0=x$0[2],x$6=match$0[3],h=match$0[2];
                  if(tagged$0)write_tag(ob,variant_tag);
                  write_hashtag(ob,h,0 !== x$6?1:0);
                  if(x$6){var x$7=x$6[1],tagged$0=1,x$0=x$7;continue}
                  return 0}
                if(-775957819 <= _a__)
                 {if(412180492 <= _a__)
                   {if(504440814 <= _a__)
                     {var o$0=x$0[2];
                      if(tagged$0)write_tag(ob,table_tag);
                      if(o$0)
                       {var
                         match$1=o$0[1],
                         a$2=match$1[2],
                         fields=match$1[1],
                         row_num=a$2.length - 1;
                        write_untagged_uvint(ob,row_num);
                        var _bf_=0 < row_num?1:0;
                        if(_bf_)
                         {var col_num=fields.length - 1;
                          write_untagged_uvint(ob,col_num);
                          var
                           _bg_=
                            function(param)
                             {var tag=param[3],h=param[2];
                              write_hashtag(ob,h,1);
                              return write_tag(ob,tag)};
                          caml_call2(Stdlib_array[13],_bg_,fields);
                          var _bh_=0 < row_num?1:0;
                          if(_bh_)
                           {var _bj_=row_num - 1 | 0,_bi_=0;
                            if(! (_bj_ < 0))
                             {var i=_bi_;
                              for(;;)
                               {var ai=caml_check_bound(a$2,i)[1 + i];
                                if(ai.length - 1 !== col_num)
                                 caml_call1(Stdlib[1],cst_Bi_io_write_t_Malformed_Ta);
                                var _bn_=col_num - 1 | 0,_bm_=0;
                                if(! (_bn_ < 0))
                                 {var j=_bm_;
                                  for(;;)
                                   {write_t(ob,0,caml_check_bound(ai,j)[1 + j]);
                                    var _bp_=j + 1 | 0;
                                    if(_bn_ !== j){var j=_bp_;continue}
                                    break}}
                                var _bo_=i + 1 | 0;
                                if(_bj_ !== i){var i=_bo_;continue}
                                break}}
                            var _bk_=0}
                          else
                           var _bk_=_bh_;
                          var _bl_=_bk_}
                        else
                         var _bl_=_bf_;
                        return _bl_}
                      return write_untagged_uvint(ob,0)}
                    var x$8=x$0[2];
                    if(tagged$0)write_tag(ob,svint_tag);
                    return write_untagged_svint(ob,x$8)}
                  if(221365804 <= _a__)
                   {var match$2=x$0[2],x$9=match$2[2],i$0=match$2[1];
                    if(tagged$0)write_tag(ob,num_variant_tag);
                    write_numtag(ob,i$0,0 !== x$9?1:0);
                    if(x$9){var x$10=x$9[1],tagged$0=1,x$0=x$10;continue}
                    return 0}
                  var x$11=x$0[2];
                  if(tagged$0)write_tag(ob,shared_tag);
                  var
                   offset=
                    caml_call3
                     (_a_[3],ob[7],[0,x$11,dummy_type_id],ob[4] + ob[3] | 0);
                  write_untagged_uvint(ob,offset);
                  var _bq_=0 === offset?1:0;
                  if(_bq_){var tagged$0=1,x$0=x$11;continue}
                  return _bq_}
                if(-783416530 <= _a__)
                 {if(-783415859 <= _a__)
                   {var x$12=x$0[2];
                    if(tagged$0)write_tag(ob,int64_tag);
                    return write_untagged_int64(ob,x$12)}
                  var x$13=x$0[2];
                  if(tagged$0)write_tag(ob,int32_tag);
                  return write_untagged_int32(ob,x$13)}
                if(-783416972 <= _a__)
                 {var x$14=x$0[2];
                  if(tagged$0)write_tag(ob,int16_tag);
                  return write_untagged_int16(ob,x$14)}
                var s=x$0[2];
                if(tagged$0)write_tag(ob,string_tag);
                return write_untagged_string(ob,s)}},
           write_tree=function(ob,x){return write_t(ob,1,x)},
           string_of_tree=
            function(x)
             {var ob=create$1(0,0,1000);write_tree(ob,x);return contents(ob)},
           tag_of_tree=
            function(x)
             {if(typeof x === "number")return unit_tag;
              var _a9_=x[1];
              return 708012133 <= _a9_
                      ?847309489 <= _a9_
                        ?928626971 === _a9_
                          ?float32_tag
                          :951901561 <= _a9_
                            ?1063160078 <= _a9_?uvint_tag:array_tag
                            :928627642 <= _a9_?float64_tag:record_tag
                        :737456202 <= _a9_
                          ?815034505 <= _a9_?int8_tag:bool_tag
                          :726928360 <= _a9_?tuple_tag:variant_tag
                      :-775957819 <= _a9_
                        ?412180492 <= _a9_
                          ?504440814 <= _a9_?table_tag:svint_tag
                          :221365804 <= _a9_?num_variant_tag:shared_tag
                        :-783416530 <= _a9_
                          ?-783415859 <= _a9_?int64_tag:int32_tag
                          :-783416972 <= _a9_?int16_tag:string_tag},
           read_tag=function(ib){return read_char(ib)},
           read_untagged_unit=
            function(ib)
             {var match=read_char(ib);
              return match?error(cst_Corrupted_data_unit_value):0},
           read_untagged_bool=
            function(ib)
             {var match=read_char(ib);
              return 1 === match
                      ?1
                      :match?error(cst_Corrupted_data_bool_value):0},
           read_untagged_char=function(ib){return read_char(ib)},
           read_untagged_int8=function(ib){return read_char(ib)},
           read_untagged_int16=
            function(ib)
             {var i=read(ib,2),s=ib[1],_a8_=caml_bytes_get(s,i + 1 | 0);
              return caml_bytes_get(s,i) << 8 | _a8_},
           read_untagged_int32=
            function(ib)
             {var
               i=read(ib,4),
               s=ib[1],
               _a6_=caml_bytes_get(s,i + 1 | 0),
               x1=caml_bytes_get(s,i) << 8 | _a6_,
               _a7_=caml_bytes_get(s,i + 3 | 0),
               x2=caml_bytes_get(s,i + 2 | 0) << 8 | _a7_;
              return x1 << 16 | x2},
           read_untagged_float32=
            function(ib)
             {return runtime.caml_int32_float_of_bits(read_untagged_int32(ib))},
           read_untagged_int64=
            function(ib)
             {return runtime.caml_int64_bits_of_float
                      (read_untagged_float64(ib))},
           read_untagged_string=
            function(ib)
             {var
               len=read_untagged_uvint(ib),
               str=caml_create_bytes(len),
               pos=[0,0],
               rem=[0,len];
              for(;;)
               {if(0 < rem[1])
                 {var bytes_read=try_preread(ib,rem[1]);
                  if(0 === bytes_read)
                   error(cst_Corrupted_data_string);
                  else
                   {caml_call5
                     (Stdlib_bytes[11],ib[1],ib[2],str,pos[1],bytes_read);
                    ib[2] = ib[2] + bytes_read | 0;
                    pos[1] = pos[1] + bytes_read | 0;
                    rem[1] = rem[1] - bytes_read | 0}
                  continue}
                return caml_call1(Stdlib_bytes[6],str)}},
           read_unit=function(ib){read_untagged_unit(ib);return 948106916},
           read_bool=function(ib){return [0,737456202,read_untagged_bool(ib)]},
           read_int8=function(ib){return [0,815034505,read_untagged_char(ib)]},
           read_int16=
            function(ib){return [0,-783416972,read_untagged_int16(ib)]},
           read_int32=
            function(ib){return [0,-783416530,read_untagged_int32(ib)]},
           read_int64=
            function(ib){return [0,-783415859,read_untagged_int64(ib)]},
           read_float32=
            function(ib){return [0,928626971,read_untagged_float32(ib)]},
           read_float64=
            function(ib){return [0,928627642,read_untagged_float64(ib)]},
           read_uvint=
            function(ib){return [0,1063160078,read_untagged_uvint(ib)]},
           read_svint=
            function(ib){return [0,412180492,read_untagged_svint(ib)]},
           read_string=
            function(ib){return [0,-976970511,read_untagged_string(ib)]},
           read_tree=
            function(opt,ib)
             {if(opt)var sth=opt[1],unhash=sth;else var unhash=make_unhash(0);
              function read_array(ib)
               {var len=read_untagged_uvint(ib);
                if(0 === len)return _p_;
                var tag=read_tag(ib),read=reader_of_tag(tag);
                function _a5_(param){return caml_call1(read,ib)}
                return [0,
                        951901561,
                        [0,[0,tag,caml_call2(Stdlib_array[2],len,_a5_)]]]}
              function reader_of_tag(param)
               {if(! (26 < param >>> 0))
                 switch(param)
                  {case 0:return read_bool;
                   case 1:return read_int8;
                   case 2:return read_int16;
                   case 3:return read_int32;
                   case 4:return read_int64;
                   case 11:return read_float32;
                   case 12:return read_float64;
                   case 16:return read_uvint;
                   case 17:return read_svint;
                   case 18:return read_string;
                   case 19:return read_array;
                   case 20:return read_tuple;
                   case 21:return read_record;
                   case 22:return read_num_variant;
                   case 23:return read_variant;
                   case 24:return read_unit;
                   case 25:return read_table;
                   case 26:return read_shared
                   }
                return error(cst_Corrupted_data_invalid_tag)}
              function read_tree(ib)
               {return caml_call1(reader_of_tag(read_tag(ib)),ib)}
              function read_tuple(ib)
               {var len=read_untagged_uvint(ib);
                function _a4_(param){return read_tree(ib)}
                return [0,726928360,caml_call2(Stdlib_array[2],len,_a4_)]}
              function read_record(ib)
               {var len=read_untagged_uvint(ib);
                function _a3_(param)
                 {var
                   h=read_field_hashtag(ib),
                   name=caml_call1(unhash,h),
                   x=read_tree(ib);
                  return [0,name,h,x]}
                return [0,847309489,caml_call2(Stdlib_array[2],len,_a3_)]}
              function read_num_variant_cont(ib,i,has_arg)
               {var x=has_arg?[0,read_tree(ib)]:0;
                return [0,221365804,[0,i,x]]}
              function read_num_variant(ib)
               {return read_numtag(ib,read_num_variant_cont)}
              function read_variant_cont(ib,h,has_arg)
               {var name=caml_call1(unhash,h),x=has_arg?[0,read_tree(ib)]:0;
                return [0,708012133,[0,name,h,x]]}
              function read_variant(ib)
               {return read_hashtag(ib,read_variant_cont)}
              function read_table(ib)
               {var row_num=read_untagged_uvint(ib);
                if(0 === row_num)return _q_;
                var col_num=read_untagged_uvint(ib);
                function _aZ_(param)
                 {var
                   h=read_field_hashtag(ib),
                   name=caml_call1(unhash,h),
                   tag=read_tag(ib);
                  return [0,name,h,tag]}
                var fields=caml_call2(Stdlib_array[2],col_num,_aZ_);
                function _a0_(param)
                 {var tag=param[3];return reader_of_tag(tag)}
                var readers=caml_call2(Stdlib_array[15],_a0_,fields);
                function _a1_(param)
                 {function _a2_(j)
                   {return caml_call1(caml_check_bound(readers,j)[1 + j],ib)}
                  return caml_call2(Stdlib_array[2],col_num,_a2_)}
                var a=caml_call2(Stdlib_array[2],row_num,_a1_);
                return [0,504440814,[0,[0,fields,a]]]}
              function read_shared(ib)
               {var pos=ib[4] + ib[2] | 0,offset=read_untagged_uvint(ib);
                if(0 === offset)
                 {var r=[];
                  runtime.caml_update_dummy(r,[0,-775957819,r]);
                  caml_call3(Rd[3],ib[7],[0,pos,dummy_type_id],r);
                  var x=read_tree(ib);
                  r[2] = x;
                  return r}
                return caml_call2
                        (Rd[4],ib[7],[0,pos - offset | 0,dummy_type_id])}
              return read_tree(ib)},
           tree_of_string=
            function(unhash,s){return read_tree(unhash,from_string(0,0,s))},
           skip_bytes=function(ib,n){read(ib,n);return 0},
           skip_unit=function(ib){return skip_bytes(ib,1)},
           skip_bool=function(ib){return skip_bytes(ib,1)},
           skip_int8=function(ib){return skip_bytes(ib,1)},
           skip_int16=function(ib){return skip_bytes(ib,2)},
           skip_int32=function(ib){return skip_bytes(ib,4)},
           skip_int64=function(ib){return skip_bytes(ib,8)},
           skip_float32=function(ib){return skip_bytes(ib,4)},
           skip_float64=function(ib){return skip_bytes(ib,8)},
           skip_uvint=function(ib){read_untagged_uvint(ib);return 0},
           skip_svint=function(ib){read_untagged_svint(ib);return 0},
           skip_string=
            function(ib)
             {var len=read_untagged_uvint(ib);return skip_bytes(ib,len)},
           skipper_of_tag=
            function(param)
             {if(! (25 < param >>> 0))
               switch(param)
                {case 0:return skip_bool;
                 case 1:return skip_int8;
                 case 2:return skip_int16;
                 case 3:return skip_int32;
                 case 4:return skip_int64;
                 case 11:return skip_float32;
                 case 12:return skip_float64;
                 case 16:return skip_uvint;
                 case 17:return skip_svint;
                 case 18:return skip_string;
                 case 19:return skip_array;
                 case 20:return skip_tuple;
                 case 21:return skip_record;
                 case 22:return skip_num_variant;
                 case 23:return skip_variant;
                 case 24:return skip_unit;
                 case 25:return skip_table
                 }
              return error(cst_Corrupted_data_invalid_tag$0)},
           skip_array=
            function(ib)
             {var len=read_untagged_uvint(ib);
              if(0 === len)return 0;
              var tag=read_tag(ib),read=skipper_of_tag(tag),_aX_=1;
              if(! (len < 1))
               {var i=_aX_;
                for(;;)
                 {caml_call1(read,ib);
                  var _aY_=i + 1 | 0;
                  if(len !== i){var i=_aY_;continue}
                  break}}
              return 0},
           skip=
            function(ib){return caml_call1(skipper_of_tag(read_tag(ib)),ib)},
           skip_tuple=
            function(ib)
             {var len=read_untagged_uvint(ib),_aV_=1;
              if(! (len < 1))
               {var i=_aV_;
                for(;;)
                 {skip(ib);
                  var _aW_=i + 1 | 0;
                  if(len !== i){var i=_aW_;continue}
                  break}}
              return 0},
           skip_record=
            function(ib)
             {var len=read_untagged_uvint(ib),_aT_=1;
              if(! (len < 1))
               {var i=_aT_;
                for(;;)
                 {read_field_hashtag(ib);
                  skip(ib);
                  var _aU_=i + 1 | 0;
                  if(len !== i){var i=_aU_;continue}
                  break}}
              return 0},
           skip_num_variant_cont=
            function(ib,i,has_arg){return has_arg?skip(ib):has_arg},
           skip_num_variant=
            function(ib){return read_numtag(ib,skip_num_variant_cont)},
           skip_variant_cont=
            function(ib,h,has_arg){return has_arg?skip(ib):has_arg},
           skip_variant=
            function(ib){return read_hashtag(ib,skip_variant_cont)},
           skip_table=
            function(ib)
             {var row_num=read_untagged_uvint(ib);
              if(0 === row_num)return 0;
              var col_num=read_untagged_uvint(ib);
              function _aO_(param)
               {read_field_hashtag(ib);return skipper_of_tag(read_tag(ib))}
              var readers=caml_call2(Stdlib_array[2],col_num,_aO_),_aP_=1;
              if(! (row_num < 1))
               {var i=_aP_;
                for(;;)
                 {var _aQ_=1;
                  if(! (col_num < 1))
                   {var j=_aQ_;
                    for(;;)
                     {caml_call1(caml_check_bound(readers,j)[1 + j],ib);
                      var _aS_=j + 1 | 0;
                      if(col_num !== j){var j=_aS_;continue}
                      break}}
                  var _aR_=i + 1 | 0;
                  if(row_num !== i){var i=_aR_;continue}
                  break}}
              return 0},
           array=Easy_format[2],
           record=Easy_format[2],
           _r_=Easy_format[2],
           tuple=
            [0,
             0,
             _r_[2],
             _r_[3],
             _r_[4],
             0,
             _r_[6],
             0,
             _r_[8],
             _r_[9],
             _r_[10],
             _r_[11],
             _r_[12],
             _r_[13],
             _r_[14]],
           map=
            function(f,a)
             {var len=a.length - 1;
              if(0 === len)
               var _aN_=[0];
              else
               {var
                 r=caml_make_vect(len,caml_call1(f,a[1])),
                 _aL_=len - 1 | 0,
                 _aK_=1;
                if(! (_aL_ < 1))
                 {var i=_aK_;
                  for(;;)
                   {r[1 + i] = caml_call1(f,a[1 + i]);
                    var _aM_=i + 1 | 0;
                    if(_aL_ !== i){var i=_aM_;continue}
                    break}}
                var _aN_=r}
              return caml_call1(Stdlib_array[11],_aN_)},
           format=
            function(shared,x)
             {var x$0=x;
              for(;;)
               {if(typeof x$0 === "number")return [0,cst_unit,Easy_format[1]];
                var _ad_=x$0[1];
                if(708012133 <= _ad_)
                 {if(847309489 <= _ad_)
                   {if(928626971 === _ad_)
                     {var x$1=x$0[2],_ae_=Easy_format[1];
                      return [0,caml_call1(Stdlib[35],x$1),_ae_]}
                    if(951901561 <= _ad_)
                     {if(1063160078 <= _ad_)
                       {var x$2=x$0[2],_af_=Easy_format[1];
                        return [0,caml_call1(Stdlib[33],x$2),_af_]}
                      var _ag_=x$0[2];
                      if(_ag_)
                       {var match=_ag_[1],a=match[2];
                        return [1,
                                [0,cst$3,cst$2,cst$1,array],
                                map(function(_aJ_){return format(shared,_aJ_)},a)]}
                      return [0,cst$4,Easy_format[1]]}
                    if(928627642 <= _ad_)
                     {var x$3=x$0[2],_ah_=Easy_format[1];
                      return [0,caml_call1(Stdlib[35],x$3),_ah_]}
                    var a$0=x$0[2];
                    return [1,
                            [0,cst$7,cst$6,cst$5,record],
                            map
                             (function(param)
                               {var x=param[3],h=param[2],o=param[1];
                                if(o)
                                 var s=o[1],s$0=caml_call2(Stdlib_printf[4],_B_,s);
                                else
                                 var s$0=caml_call2(Stdlib_printf[4],_D_,h);
                                var
                                 _aG_=format(shared,x),
                                 _aH_=Easy_format[3],
                                 _aI_=Easy_format[1];
                                return [2,
                                        [0,[0,caml_call2(Stdlib_printf[4],_C_,s$0),_aI_],_aH_],
                                        _aG_]},
                              a$0)]}
                  if(737456202 <= _ad_)
                   {if(815034505 <= _ad_)
                     {var x$4=x$0[2],_ai_=Easy_format[1];
                      return [0,caml_call2(Stdlib_printf[4],_s_,x$4),_ai_]}
                    var
                     x$5=x$0[2],
                     _aj_=Easy_format[1],
                     _ak_=x$5?cst_true:cst_false;
                    return [0,_ak_,_aj_]}
                  if(726928360 <= _ad_)
                   {var a$1=x$0[2];
                    return [1,
                            [0,cst$10,cst$9,cst$8,tuple],
                            map(function(_aF_){return format(shared,_aF_)},a$1)]}
                  var
                   match$0=x$0[2],
                   o=match$0[3],
                   h=match$0[2],
                   opt_name=match$0[1];
                  if(opt_name)
                   var s=opt_name[1],name=caml_call2(Stdlib_printf[4],_t_,s);
                  else
                   var name=caml_call2(Stdlib_printf[4],_u_,h);
                  if(o)
                   {var
                     x$6=o[1],
                     _al_=format(shared,x$6),
                     _am_=Easy_format[3],
                     _an_=Easy_format[1];
                    return [1,
                            [0,cst$14,cst$13,cst$12,tuple],
                            [0,
                             [2,
                              [0,[0,caml_call2(Stdlib[28],name,cst$11),_an_],_am_],
                              _al_],
                             0]]}
                  var
                   _ao_=Easy_format[1],
                   _ap_=caml_call2(Stdlib[28],name,cst$15);
                  return [0,caml_call2(Stdlib[28],cst$16,_ap_),_ao_]}
                if(-775957819 <= _ad_)
                 {if(412180492 <= _ad_)
                   {if(504440814 <= _ad_)
                     {var _aq_=x$0[2];
                      if(_aq_)
                       {var
                         match$1=_aq_[1],
                         aa=match$1[2],
                         header=match$1[1],
                         _ar_=
                          function(header)
                            {return function(a)
                              {function _aE_(i,x)
                                {var
                                  match=caml_check_bound(header,i)[1 + i],
                                  h=match[2],
                                  s=match[1];
                                 return [0,s,h,x]}
                               return [0,847309489,caml_call2(Stdlib_array[16],_aE_,a)]}}
                           (header),
                         x$7=
                          [0,
                           951901561,
                           [0,[0,record_tag,caml_call2(Stdlib_array[15],_ar_,aa)]]],
                         x$0=x$7;
                        continue}
                      return [0,cst$17,Easy_format[1]]}
                    var x$8=x$0[2],_as_=Easy_format[1];
                    return [0,caml_call1(Stdlib[33],x$8),_as_]}
                  if(221365804 <= _ad_)
                   {var
                     match$2=x$0[2],
                     o$0=match$2[2],
                     i=match$2[1],
                     suffix=0 === i?cst$18:caml_call1(Stdlib[33],i);
                    if(o$0)
                     {var
                       x$9=o$0[1],
                       _at_=Easy_format[1],
                       cons=[0,caml_call2(Stdlib[28],cst_Some,suffix),_at_],
                       _au_=format(shared,x$9);
                      return [2,[0,cons,Easy_format[3]],_au_]}
                    var _av_=Easy_format[1];
                    return [0,caml_call2(Stdlib[28],cst_None,suffix),_av_]}
                  var x$10=x$0[2],p=shared[2],tbl=shared[1];
                  p[1]++;
                  var
                   pos=p[1],
                   offset=caml_call3(_a_[3],tbl,[0,x$10,dummy_type_id],pos);
                  if(0 === offset)
                   {var
                     _aw_=format(shared,x$10),
                     _ax_=Easy_format[3],
                     _ay_=Easy_format[1];
                    return [2,
                            [0,[0,caml_call2(Stdlib_printf[4],_v_,pos),_ay_],_ax_],
                            _aw_]}
                  var _az_=Easy_format[1];
                  return [0,
                          caml_call2(Stdlib_printf[4],_w_,pos - offset | 0),
                          _az_]}
                if(-783416530 <= _ad_)
                 {if(-783415859 <= _ad_)
                   {var x$11=x$0[2],_aA_=Easy_format[1];
                    return [0,caml_call2(Stdlib_printf[4],_x_,x$11),_aA_]}
                  var x$12=x$0[2],_aB_=Easy_format[1];
                  return [0,caml_call2(Stdlib_printf[4],_y_,x$12),_aB_]}
                if(-783416972 <= _ad_)
                 {var x$13=x$0[2],_aC_=Easy_format[1];
                  return [0,caml_call2(Stdlib_printf[4],_z_,x$13),_aC_]}
                var s$0=x$0[2],_aD_=Easy_format[1];
                return [0,caml_call2(Stdlib_printf[4],_A_,s$0),_aD_]}},
           init=function(param){return [0,caml_call1(_a_[1],512),[0,0]]},
           view_of_tree=
            function(t)
             {var _ac_=format(init(0),t);
              return caml_call3(Easy_format[4][4],0,0,_ac_)},
           print_view_of_tree=
            function(t)
             {var _ab_=format(init(0),t);
              return caml_call3(Easy_format[4][6],0,0,_ab_)},
           output_view_of_tree=
            function(oc,t)
             {var _aa_=format(init(0),t);
              return caml_call4(Easy_format[4][5],0,0,oc,_aa_)},
           view=
            function(unhash,s){return view_of_tree(tree_of_string(unhash,s))},
           print_view=
            function(unhash,s)
             {return print_view_of_tree(tree_of_string(unhash,s))},
           output_view=
            function(unhash,oc,s)
             {return output_view_of_tree(oc,tree_of_string(unhash,s))},
           Bi_io=
            [0,
             bool_tag,
             int8_tag,
             int16_tag,
             int32_tag,
             int64_tag,
             float32_tag,
             float64_tag,
             uvint_tag,
             svint_tag,
             string_tag,
             array_tag,
             tuple_tag,
             record_tag,
             num_variant_tag,
             variant_tag,
             unit_tag,
             table_tag,
             shared_tag,
             write_tag,
             read_tag,
             hash_name,
             write_hashtag,
             string_of_hashtag,
             read_hashtag,
             read_field_hashtag,
             make_unhash,
             write_numtag,
             read_numtag,
             write_untagged_unit,
             write_untagged_bool,
             write_untagged_char,
             write_untagged_int8,
             write_untagged_int16,
             write_untagged_int32,
             write_untagged_int64,
             write_untagged_float32,
             write_untagged_float64,
             write_untagged_string,
             write_untagged_uvint,
             write_untagged_svint,
             write_unit,
             write_bool,
             write_char,
             write_int8,
             write_int16,
             write_int32,
             write_int64,
             write_float32,
             write_float64,
             write_string,
             write_uvint,
             write_svint,
             read_untagged_unit,
             read_untagged_bool,
             read_untagged_char,
             read_untagged_int8,
             read_untagged_int16,
             read_untagged_int32,
             read_untagged_int64,
             read_untagged_float32,
             read_untagged_float64,
             read_untagged_string,
             read_untagged_uvint,
             read_untagged_svint,
             skip,
             write_tree,
             string_of_tree,
             read_tree,
             tree_of_string,
             tag_of_tree,
             view_of_tree,
             view,
             print_view_of_tree,
             print_view,
             output_view_of_tree,
             output_view,
             safety_test];
          caml_register_global(118,Bi_io,"Bi_io");
          var
           split=
            function(s)
             {var
               acc=[0,0],
               stop=[0,caml_ml_string_length(s)],
               _Y_=stop[1] - 1 | 0;
              if(! (_Y_ < 0))
               {var i=_Y_;
                for(;;)
                 {if(44 === caml_string_get(s,i))
                   {var start=i + 1 | 0,___=acc[1];
                    acc[1]
                    =
                    [0,
                     caml_call3(Stdlib_string[4],s,start,stop[1] - start | 0),
                     ___];
                    stop[1] = i}
                  var _$_=i - 1 | 0;
                  if(0 !== i){var i=_$_;continue}
                  break}}
              var _Z_=acc[1];
              return [0,caml_call3(Stdlib_string[4],s,0,stop[1]),_Z_]},
           load_lines=
            function(accu,s)
             {var ic=caml_call1(Stdlib[79],s),l=[0,accu];
              try
               {for(;;)
                 {var _W_=caml_call1(Stdlib_list[9],l[1]);
                  l[1] = [0,caml_call1(Stdlib[83],ic),_W_];
                  continue}}
              catch(_X_)
               {_X_ = caml_wrap_exception(_X_);
                if(_X_ === Stdlib[12]){caml_call1(Stdlib[93],ic);return l[1]}
                throw _X_}},
           load=
            function(ic)
             {var buf=caml_call1(Stdlib_buffer[1],1000);
              try
               {for(;;)
                 {var _U_=caml_call1(Stdlib[82],ic);
                  caml_call2(Stdlib_buffer[10],buf,_U_);
                  continue}}
              catch(_V_)
               {_V_ = caml_wrap_exception(_V_);
                if(_V_ === Stdlib[12])return caml_call1(Stdlib_buffer[2],buf);
                throw _V_}},
           symbol=Stdlib_filename[4],
           default_dict_path=
            function(param)
             {try
               {var
                 _R_=Stdlib_sys[4],
                 _S_=
                  caml_string_notequal(_R_,cst_Cygwin)
                   ?caml_string_notequal(_R_,cst_Unix)
                     ?caml_string_notequal(_R_,cst_Win32)
                       ?0
                       :[0,
                         caml_call2
                          (symbol,caml_sys_getenv(cst_HOMEPATH),cst_bdump_dict)]
                     :[0,
                       caml_call2
                        (symbol,caml_sys_getenv(cst_HOME),cst_bdump_dict$0)]
                   :[0,
                     caml_call2
                      (symbol,caml_sys_getenv(cst_HOME$0),cst_bdump_dict$1)];
                return _S_}
              catch(_T_)
               {_T_ = caml_wrap_exception(_T_);
                if(_T_ === Stdlib[8])return 0;
                throw _T_}},
           load_dictionary=
            function(dic_file,accu)
             {if(dic_file)
               {var fn=dic_file[1];
                if(runtime.caml_sys_file_exists(fn))
                 try
                  {var _Q_=load_lines(accu,fn);return _Q_}
                 catch(e)
                  {e = caml_wrap_exception(e);
                   var
                    _O_=caml_call1(Stdlib_printexc[1],e),
                    _P_=caml_call3(Stdlib_printf[4],_E_,fn,_O_);
                   return caml_call1(Stdlib[2],_P_)}
                return accu}
              return accu},
           write_uniq=
            function(oc,a)
             {var _J_=0 < a.length - 1?1:0;
              if(_J_)
               {var _K_=caml_check_bound(a,0)[1];
                caml_call3(Stdlib_printf[1],oc,_F_,_K_);
                var
                 _L_=caml_check_bound(a,0)[1],
                 _M_=
                  function(last,x)
                   {if(caml_string_notequal(last,x))
                     caml_call3(Stdlib_printf[1],oc,_G_,x);
                    return x};
                caml_call3(Stdlib_array[17],_M_,_L_,a);
                var _N_=0}
              else
               var _N_=_J_;
              return _N_},
           save_dictionary=
            function(dic_file,l)
             {if(dic_file)
               {var fn=dic_file[1],a=caml_call1(Stdlib_array[12],l);
                caml_call2(Stdlib_array[27],Stdlib_string[33],a);
                var
                 oc=caml_call1(Stdlib[60],fn),
                 finally$0=function(param){return caml_call1(Stdlib[77],oc)};
                try
                 {write_uniq(oc,a);var _I_=finally$0(0);return _I_}
                catch(e){e = caml_wrap_exception(e);finally$0(0);throw e}}
              return 0},
           Bi_dump=
            [0,
             split,
             load_lines,
             load,
             symbol,
             default_dict_path,
             load_dictionary,
             write_uniq,
             save_dictionary];
          caml_register_global(122,Bi_dump,"Bi_dump");
          return}
        throw [0,Assert_failure,_H_]}
      r[1] = r[1] >>> 1 | 0;
      c[1]++;
      continue}}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJiaW5pb3UuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbXSwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlc0NvbnRlbnQiOltdfQ==
