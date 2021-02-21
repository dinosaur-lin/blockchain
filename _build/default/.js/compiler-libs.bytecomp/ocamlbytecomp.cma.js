(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_bytes_get=runtime.caml_bytes_get,
     caml_check_bound=runtime.caml_check_bound,
     caml_equal=runtime.caml_equal,
     caml_fresh_oo_id=runtime.caml_fresh_oo_id,
     caml_make_vect=runtime.caml_make_vect,
     caml_ml_bytes_length=runtime.caml_ml_bytes_length,
     caml_ml_string_length=runtime.caml_ml_string_length,
     caml_output_value_to_string=runtime.caml_output_value_to_string,
     caml_register_global=runtime.caml_register_global,
     caml_string_equal=runtime.caml_string_equal,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_sys_getcwd=runtime.caml_sys_getcwd,
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
    function caml_call6(f,a0,a1,a2,a3,a4,a5)
     {return f.length == 6
              ?f(a0,a1,a2,a3,a4,a5)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5])}
    function caml_call7(f,a0,a1,a2,a3,a4,a5,a6)
     {return f.length == 7
              ?f(a0,a1,a2,a3,a4,a5,a6)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Bytegen_comp_expr_var=
      caml_string_of_jsbytes("Bytegen.comp_expr: var "),
     cst_caml_obj_dup=caml_string_of_jsbytes("caml_obj_dup"),
     cst_Bytegen_comp_expr_Pduparra=
      caml_string_of_jsbytes
       ("Bytegen.comp_expr: Pduparray takes exactly one arg"),
     cst_Bytegen_comp_expr_assign=
      caml_string_of_jsbytes("Bytegen.comp_expr: assign"),
     cst$0=caml_string_of_jsbytes("??"),
     cst$1=caml_string_of_jsbytes(""),
     cst_compare=caml_string_of_jsbytes("compare"),
     cst_of_int=caml_string_of_jsbytes("of_int"),
     cst_to_int=caml_string_of_jsbytes("to_int"),
     cst_neg=caml_string_of_jsbytes("neg"),
     cst_add=caml_string_of_jsbytes("add"),
     cst_sub=caml_string_of_jsbytes("sub"),
     cst_mul=caml_string_of_jsbytes("mul"),
     cst_div=caml_string_of_jsbytes("div"),
     cst_mod=caml_string_of_jsbytes("mod"),
     cst_and=caml_string_of_jsbytes("and"),
     cst_or=caml_string_of_jsbytes("or"),
     cst_xor=caml_string_of_jsbytes("xor"),
     cst_shift_left=caml_string_of_jsbytes("shift_left"),
     cst_shift_right_unsigned=caml_string_of_jsbytes("shift_right_unsigned"),
     cst_shift_right=caml_string_of_jsbytes("shift_right"),
     cst_caml_ba_get=caml_string_of_jsbytes("caml_ba_get_"),
     cst_caml_ba_set=caml_string_of_jsbytes("caml_ba_set_"),
     cst_caml_ba_dim=caml_string_of_jsbytes("caml_ba_dim_"),
     cst_big_endian=caml_string_of_jsbytes("big_endian"),
     cst_word_size=caml_string_of_jsbytes("word_size"),
     cst_int_size=caml_string_of_jsbytes("int_size"),
     cst_max_wosize=caml_string_of_jsbytes("max_wosize"),
     cst_ostype_unix=caml_string_of_jsbytes("ostype_unix"),
     cst_ostype_win32=caml_string_of_jsbytes("ostype_win32"),
     cst_ostype_cygwin=caml_string_of_jsbytes("ostype_cygwin"),
     cst_backend_type=caml_string_of_jsbytes("backend_type"),
     cst_bswap=caml_string_of_jsbytes("bswap"),
     cst_Bytegen_comp_primitive=
      caml_string_of_jsbytes("Bytegen.comp_primitive"),
     cst_caml_nativeint=caml_string_of_jsbytes("caml_nativeint_"),
     cst_caml_int32=caml_string_of_jsbytes("caml_int32_"),
     cst_caml_int64=caml_string_of_jsbytes("caml_int64_"),
     cst_outside_appropriated_catch=
      caml_string_of_jsbytes(") outside appropriated catch"),
     cst_exit=caml_string_of_jsbytes("exit("),
     cst_Bytegen_merge_repr=caml_string_of_jsbytes("Bytegen.merge_repr"),
     cst_Bytegen_merge_infos=caml_string_of_jsbytes("Bytegen.merge_infos"),
     cst=caml_string_of_jsbytes(""),
     cst_bytecode_unit=caml_string_of_jsbytes("bytecode unit"),
     cst_Emitcode_define_label=caml_string_of_jsbytes("Emitcode.define_label"),
     cst_Emitcode_const_as_int=caml_string_of_jsbytes("Emitcode.const_as_int"),
     cst_Emitcode_Error=caml_string_of_jsbytes("Emitcode.Error"),
     cst_Emitcode_AsInt=caml_string_of_jsbytes("Emitcode.AsInt"),
     cst_c$1=caml_string_of_jsbytes(".c"),
     cst$9=caml_string_of_jsbytes(""),
     cst$10=caml_string_of_jsbytes(""),
     cst_lcamlrun$0=caml_string_of_jsbytes("-lcamlrun"),
     cst_ifdef_cplusplus_extern_C_e=
      caml_string_of_jsbytes
       ('#ifdef __cplusplus\nextern "C" {\n#endif\n#ifdef _WIN64\n#ifdef __MINGW32__\ntypedef long long value;\n#else\ntypedef __int64 value;\n#endif\n#else\ntypedef long value;\n#endif\n'),
     cst_ifdef_cplusplus_endif$0=
      caml_string_of_jsbytes("#ifdef __cplusplus\n}\n#endif\n"),
     cst_stdlib_cma$0=caml_string_of_jsbytes("stdlib.cma"),
     cst_stdlib_cma=caml_string_of_jsbytes("stdlib.cma"),
     cst$11=caml_string_of_jsbytes(""),
     cst_camlcode=caml_string_of_jsbytes("camlcode"),
     cst_camlprim_c=caml_string_of_jsbytes(".camlprim.c"),
     cst_c$3=caml_string_of_jsbytes(".c"),
     cst_camlprim=caml_string_of_jsbytes("camlprim"),
     cst_c=caml_string_of_jsbytes(".c"),
     stable_name=[0,caml_string_of_jsbytes("camlobj.c")],
     cst_c$2=caml_string_of_jsbytes(".c"),
     cst_camlobj=caml_string_of_jsbytes("camlobj"),
     cst_c$0=caml_string_of_jsbytes(".c"),
     cst_Cygwin=caml_string_of_jsbytes("Cygwin"),
     cst_Win32=caml_string_of_jsbytes("Win32"),
     cst_exe=caml_string_of_jsbytes(".exe"),
     cst$8=caml_string_of_jsbytes(""),
     cst_lcamlrun=caml_string_of_jsbytes("-lcamlrun"),
     cst$7=caml_string_of_jsbytes(" "),
     cst_I=caml_string_of_jsbytes("-I"),
     cst_define_CAML_INTERNALS_ifde=
      caml_string_of_jsbytes
       ('#define CAML_INTERNALS\n\n#ifdef __cplusplus\nextern "C" {\n#endif\n#include <caml/mlvalues.h>\n#include <caml/startup.h>\n'),
     cst_static_int_caml_code=
      caml_string_of_jsbytes("static int caml_code[] = {\n"),
     cst_static_char_caml_data=
      caml_string_of_jsbytes("static char caml_data[] = {\n"),
     cst$5=caml_string_of_jsbytes("\n};\n\n"),
     cst_CRCS$0=caml_string_of_jsbytes("CRCS"),
     cst_PRIM$0=caml_string_of_jsbytes("PRIM"),
     cst_SYMB$1=caml_string_of_jsbytes("SYMB"),
     cst_static_char_caml_sections=
      caml_string_of_jsbytes("static char caml_sections[] = {\n"),
     cst$6=caml_string_of_jsbytes("\n};\n\n"),
     cst_ifdef_WIN32_int_wmain_int_=
      caml_string_of_jsbytes
       ("\n#ifdef _WIN32\nint wmain(int argc, wchar_t **argv)\n#else\nint main(int argc, char **argv)\n#endif\n{\n  caml_byte_program_mode = COMPLETE_EXE;\n  caml_startup_code(caml_code, sizeof(caml_code),\n                    caml_data, sizeof(caml_data),\n                    caml_sections, sizeof(caml_sections),\n                    /* pooling */ 0,\n                    argv);\n  caml_sys_exit(Val_int(0));\n  return 0; /* not reached */\n}\n"),
     cst_void_caml_startup_char_os_=
      caml_string_of_jsbytes
       ("\nvoid caml_startup(char_os ** argv)\n{\n  caml_startup_code(caml_code, sizeof(caml_code),\n                    caml_data, sizeof(caml_data),\n                    caml_sections, sizeof(caml_sections),\n                    /* pooling */ 0,\n                    argv);\n}\n\nvalue caml_startup_exn(char_os ** argv)\n{\n  return caml_startup_code_exn(caml_code, sizeof(caml_code),\n                               caml_data, sizeof(caml_data),\n                               caml_sections, sizeof(caml_sections),\n                               /* pooling */ 0,\n                               argv);\n}\n\nvoid caml_startup_pooled(char_os ** argv)\n{\n  caml_startup_code(caml_code, sizeof(caml_code),\n                    caml_data, sizeof(caml_data),\n                    caml_sections, sizeof(caml_sections),\n                    /* pooling */ 1,\n                    argv);\n}\n\nvalue caml_startup_pooled_exn(char_os ** argv)\n{\n  return caml_startup_code_exn(caml_code, sizeof(caml_code),\n                               caml_data, sizeof(caml_data),\n                               caml_sections, sizeof(caml_sections),\n                               /* pooling */ 1,\n                               argv);\n}\n"),
     cst_ifdef_cplusplus_endif=
      caml_string_of_jsbytes("\n#ifdef __cplusplus\n}\n#endif\n"),
     cst_cds=caml_string_of_jsbytes(".cds"),
     cst_SYMB$0=caml_string_of_jsbytes("SYMB"),
     cst_DBUG$0=caml_string_of_jsbytes("DBUG"),
     cst$4=caml_string_of_jsbytes("\n"),
     cst_camlheader_ur=caml_string_of_jsbytes("camlheader_ur"),
     cst_camlheader=caml_string_of_jsbytes("camlheader"),
     cst_0=caml_string_of_jsbytes('" "$0" "$@"'),
     cst_bin_sh_exec=caml_string_of_jsbytes('/bin/sh\nexec "'),
     cst_RNTM=caml_string_of_jsbytes("RNTM"),
     cst_CODE=caml_string_of_jsbytes("CODE"),
     cst_DLPT=caml_string_of_jsbytes("DLPT"),
     cst_DLLS=caml_string_of_jsbytes("DLLS"),
     cst_PRIM=caml_string_of_jsbytes("PRIM"),
     cst_bytecode_executable=caml_string_of_jsbytes("bytecode executable"),
     cst_DATA=caml_string_of_jsbytes("DATA"),
     cst_SYMB=caml_string_of_jsbytes("SYMB"),
     cst_CRCS=caml_string_of_jsbytes("CRCS"),
     cst_DBUG=caml_string_of_jsbytes("DBUG"),
     cst$2=caml_string_of_jsbytes(")"),
     cst$3=caml_string_of_jsbytes("("),
     cst_CAMLORIGIN=caml_string_of_jsbytes("$CAMLORIGIN"),
     cst_Bytelink_Error=caml_string_of_jsbytes("Bytelink.Error"),
     cst_bytecode_library=caml_string_of_jsbytes("bytecode library"),
     cst_Bytelibrarian_Error=caml_string_of_jsbytes("Bytelibrarian.Error"),
     cst_cmi$0=caml_string_of_jsbytes(".cmi"),
     cst$15=caml_string_of_jsbytes("."),
     cst_bytecode_unit$0=caml_string_of_jsbytes("bytecode unit"),
     cst_cmi=caml_string_of_jsbytes(".cmi"),
     cst$14=caml_string_of_jsbytes("."),
     cst$12=caml_string_of_jsbytes("."),
     cst$13=caml_string_of_jsbytes("."),
     cst_Bytepackager_Error=caml_string_of_jsbytes("Bytepackager.Error"),
     cst_cmo=caml_string_of_jsbytes("cmo"),
     cst_cmi$1=caml_string_of_jsbytes("cmi"),
     tool_name=caml_string_of_jsbytes("ocamlc"),
     Lambda=global_data.Lambda,
     Ident=global_data.Ident,
     Stdlib=global_data.Stdlib,
     Stdlib_list=global_data.Stdlib__list,
     Assert_failure=global_data.Assert_failure,
     Subst=global_data.Subst,
     Env=global_data.Env,
     Debuginfo=global_data.Debuginfo,
     Stdlib_stack=global_data.Stdlib__stack,
     Misc=global_data.Misc,
     Primitive=global_data.Primitive,
     Matching=global_data.Matching,
     Config=global_data.Config,
     Stdlib_int=global_data.Stdlib__int,
     Stdlib_printf=global_data.Stdlib__printf,
     Clflags=global_data.Clflags,
     Switch=global_data.Switch,
     Stdlib_format=global_data.Stdlib__format,
     Stdlib_array=global_data.Stdlib__array,
     Printlambda=global_data.Printlambda,
     Opcodes=global_data.Opcodes,
     Location=global_data.Location,
     Stdlib_filename=global_data.Stdlib__filename,
     Translmod=global_data.Translmod,
     Btype=global_data.Btype,
     Stdlib_marshal=global_data.Stdlib__marshal,
     Symtable=global_data.Symtable,
     Ccomp=global_data.Ccomp,
     Stdlib_sys=global_data.Stdlib__sys,
     Stdlib_string=global_data.Stdlib__string,
     Bytesections=global_data.Bytesections,
     Load_path=global_data.Load_path,
     Dll=global_data.Dll,
     Stdlib_option=global_data.Stdlib__option,
     Consistbl=global_data.Consistbl,
     Typemod=global_data.Typemod,
     Simplif=global_data.Simplif,
     Compile_common=global_data.Compile_common,
     Profile=global_data.Profile,
     Instruct=[0,-1073741824,1073741823];
    caml_register_global(315,Instruct,"Instruct");
    var
     label_counter=[0,0],
     _a_=[0,caml_string_of_jsbytes("bytecomp/bytegen.ml"),185,28],
     _b_=[0,caml_string_of_jsbytes("bytecomp/bytegen.ml"),221,6],
     _aA_=[0,caml_string_of_jsbytes("bytecomp/bytegen.ml"),822,16],
     _ah_=[15,[0,[0,0]]],
     _ai_=[30,caml_string_of_jsbytes("caml_alloc_dummy"),1],
     _aj_=[30,caml_string_of_jsbytes("caml_alloc_dummy_infix"),2],
     _ak_=[30,caml_string_of_jsbytes("caml_alloc_dummy_float"),1],
     _al_=[30,caml_string_of_jsbytes("caml_alloc_dummy_function"),2],
     _am_=[30,caml_string_of_jsbytes("caml_update_dummy"),2],
     _ag_=[0,caml_string_of_jsbytes("bytecomp/bytegen.ml"),616,17],
     _an_=[30,caml_string_of_jsbytes("caml_eq_float"),2],
     _ao_=[30,caml_string_of_jsbytes("caml_neq_float"),2],
     _ap_=[30,caml_string_of_jsbytes("caml_lt_float"),2],
     _aq_=[30,caml_string_of_jsbytes("caml_lt_float"),2],
     _ar_=[30,caml_string_of_jsbytes("caml_gt_float"),2],
     _as_=[30,caml_string_of_jsbytes("caml_gt_float"),2],
     _at_=[30,caml_string_of_jsbytes("caml_le_float"),2],
     _au_=[30,caml_string_of_jsbytes("caml_le_float"),2],
     _av_=[30,caml_string_of_jsbytes("caml_ge_float"),2],
     _aw_=[30,caml_string_of_jsbytes("caml_ge_float"),2],
     _ax_=[16,0,0],
     _ay_=[30,caml_string_of_jsbytes("caml_make_array"),1],
     _az_=[0,caml_string_of_jsbytes("bytecomp/bytegen.ml"),751,6],
     _aB_=[0,caml_string_of_jsbytes("bytecomp/bytegen.ml"),804,56],
     _aC_=[31,1],
     _aD_=[1,1],
     _aE_=[4,2],
     _aF_=[1,1],
     _aG_=[1,2],
     _aI_=[0,[8,1],0],
     _aH_=[30,caml_string_of_jsbytes("caml_ensure_stack_capacity"),1],
     _c_=[30,caml_string_of_jsbytes("caml_string_of_bytes"),1],
     _d_=[30,caml_string_of_jsbytes("caml_bytes_of_string"),1],
     _e_=[30,caml_string_of_jsbytes("caml_int_compare"),2],
     _f_=[30,caml_string_of_jsbytes("caml_float_compare"),2],
     _g_=[30,caml_string_of_jsbytes("caml_int_of_float"),1],
     _h_=[30,caml_string_of_jsbytes("caml_float_of_int"),1],
     _i_=[30,caml_string_of_jsbytes("caml_neg_float"),1],
     _j_=[30,caml_string_of_jsbytes("caml_abs_float"),1],
     _k_=[30,caml_string_of_jsbytes("caml_add_float"),2],
     _l_=[30,caml_string_of_jsbytes("caml_sub_float"),2],
     _m_=[30,caml_string_of_jsbytes("caml_mul_float"),2],
     _n_=[30,caml_string_of_jsbytes("caml_div_float"),2],
     _o_=[30,caml_string_of_jsbytes("caml_ml_string_length"),1],
     _p_=[30,caml_string_of_jsbytes("caml_string_get"),2],
     _q_=[30,caml_string_of_jsbytes("caml_ml_bytes_length"),1],
     _r_=[30,caml_string_of_jsbytes("caml_bytes_get"),2],
     _s_=[30,caml_string_of_jsbytes("caml_bytes_set"),3],
     _t_=[30,caml_string_of_jsbytes("caml_bswap16"),1],
     _u_=[30,caml_string_of_jsbytes("caml_int_as_pointer"),1],
     _v_=[30,caml_string_of_jsbytes("caml_obj_dup"),1],
     _w_=[30,caml_string_of_jsbytes("caml_floatarray_unsafe_get"),2],
     _x_=[30,caml_string_of_jsbytes("caml_array_unsafe_get"),2],
     _y_=[30,caml_string_of_jsbytes("caml_floatarray_unsafe_set"),3],
     _z_=[30,caml_string_of_jsbytes("caml_array_unsafe_set"),3],
     _A_=[30,caml_string_of_jsbytes("caml_floatarray_get"),2],
     _B_=[30,caml_string_of_jsbytes("caml_array_get_addr"),2],
     _C_=[30,caml_string_of_jsbytes("caml_array_get"),2],
     _D_=[30,caml_string_of_jsbytes("caml_floatarray_set"),3],
     _E_=[30,caml_string_of_jsbytes("caml_array_set_addr"),3],
     _F_=[30,caml_string_of_jsbytes("caml_array_set"),3],
     _G_=[30,caml_string_of_jsbytes("caml_nativeint_to_int32"),1],
     _H_=[30,caml_string_of_jsbytes("caml_int64_of_nativeint"),1],
     _I_=[30,caml_string_of_jsbytes("caml_nativeint_of_int32"),1],
     _J_=[30,caml_string_of_jsbytes("caml_int64_of_int32"),1],
     _K_=[30,caml_string_of_jsbytes("caml_int64_to_nativeint"),1],
     _L_=[30,caml_string_of_jsbytes("caml_int64_to_int32"),1],
     _M_=[30,caml_string_of_jsbytes("caml_equal"),2],
     _N_=[30,caml_string_of_jsbytes("caml_notequal"),2],
     _O_=[30,caml_string_of_jsbytes("caml_lessthan"),2],
     _P_=[30,caml_string_of_jsbytes("caml_greaterthan"),2],
     _Q_=[30,caml_string_of_jsbytes("caml_lessequal"),2],
     _R_=[30,caml_string_of_jsbytes("caml_greaterequal"),2],
     _S_=[30,caml_string_of_jsbytes("caml_string_get16"),2],
     _T_=[30,caml_string_of_jsbytes("caml_string_get32"),2],
     _U_=[30,caml_string_of_jsbytes("caml_string_get64"),2],
     _V_=[30,caml_string_of_jsbytes("caml_bytes_get16"),2],
     _W_=[30,caml_string_of_jsbytes("caml_bytes_get32"),2],
     _X_=[30,caml_string_of_jsbytes("caml_bytes_get64"),2],
     _Y_=[30,caml_string_of_jsbytes("caml_bytes_set16"),3],
     _Z_=[30,caml_string_of_jsbytes("caml_bytes_set32"),3],
     ___=[30,caml_string_of_jsbytes("caml_bytes_set64"),3],
     _$_=[30,caml_string_of_jsbytes("caml_ba_uint8_get16"),2],
     _aa_=[30,caml_string_of_jsbytes("caml_ba_uint8_get32"),2],
     _ab_=[30,caml_string_of_jsbytes("caml_ba_uint8_get64"),2],
     _ac_=[30,caml_string_of_jsbytes("caml_ba_uint8_set16"),3],
     _ad_=[30,caml_string_of_jsbytes("caml_ba_uint8_set32"),3],
     _ae_=[30,caml_string_of_jsbytes("caml_ba_uint8_set64"),3],
     _af_=
      [0,
       [11,caml_string_of_jsbytes("caml_sys_const_"),[2,0,0]],
       caml_string_of_jsbytes("caml_sys_const_%s")],
     _bS_=
      [0,[12,76,[4,3,0,0,[12,58,[15,0]]]],caml_string_of_jsbytes("L%i:%a")],
     _bR_=
      [0,
       [15,[17,[0,caml_string_of_jsbytes("@ "),1,0],[15,0]]],
       caml_string_of_jsbytes("%a@ %a")],
     _bT_=
      [0,
       [18,
        [1,
         [0,
          [11,caml_string_of_jsbytes("<v 0>"),0],
          caml_string_of_jsbytes("<v 0>")]],
        [15,[17,0,0]]],
       caml_string_of_jsbytes("@[<v 0>%a@]")],
     _bC_=
      [0,
       [17,[0,caml_string_of_jsbytes("@ "),1,0],[4,3,0,0,0]],
       caml_string_of_jsbytes("@ %i")],
     _bl_=[0,[12,32,[4,3,0,0,0]],caml_string_of_jsbytes(" %i")],
     _aJ_=
      [0,
       [11,caml_string_of_jsbytes("\tpush"),0],
       caml_string_of_jsbytes("\tpush")],
     _aK_=
      [0,
       [11,caml_string_of_jsbytes("\trestart"),0],
       caml_string_of_jsbytes("\trestart")],
     _aL_=
      [0,
       [11,caml_string_of_jsbytes("\tvectlength"),0],
       caml_string_of_jsbytes("\tvectlength")],
     _aM_=
      [0,
       [11,caml_string_of_jsbytes("\tgetvectitem"),0],
       caml_string_of_jsbytes("\tgetvectitem")],
     _aN_=
      [0,
       [11,caml_string_of_jsbytes("\tsetvectitem"),0],
       caml_string_of_jsbytes("\tsetvectitem")],
     _aO_=
      [0,
       [11,caml_string_of_jsbytes("\tgetstringchar"),0],
       caml_string_of_jsbytes("\tgetstringchar")],
     _aP_=
      [0,
       [11,caml_string_of_jsbytes("\tgetbyteschar"),0],
       caml_string_of_jsbytes("\tgetbyteschar")],
     _aQ_=
      [0,
       [11,caml_string_of_jsbytes("\tsetbyteschar"),0],
       caml_string_of_jsbytes("\tsetbyteschar")],
     _aR_=
      [0,
       [11,caml_string_of_jsbytes("\tboolnot"),0],
       caml_string_of_jsbytes("\tboolnot")],
     _aS_=
      [0,
       [11,caml_string_of_jsbytes("\tpoptrap"),0],
       caml_string_of_jsbytes("\tpoptrap")],
     _aT_=
      [0,
       [11,caml_string_of_jsbytes("\tcheck_signals"),0],
       caml_string_of_jsbytes("\tcheck_signals")],
     _aU_=
      [0,
       [11,caml_string_of_jsbytes("\tnegint"),0],
       caml_string_of_jsbytes("\tnegint")],
     _aV_=
      [0,
       [11,caml_string_of_jsbytes("\taddint"),0],
       caml_string_of_jsbytes("\taddint")],
     _aW_=
      [0,
       [11,caml_string_of_jsbytes("\tsubint"),0],
       caml_string_of_jsbytes("\tsubint")],
     _aX_=
      [0,
       [11,caml_string_of_jsbytes("\tmulint"),0],
       caml_string_of_jsbytes("\tmulint")],
     _aY_=
      [0,
       [11,caml_string_of_jsbytes("\tdivint"),0],
       caml_string_of_jsbytes("\tdivint")],
     _aZ_=
      [0,
       [11,caml_string_of_jsbytes("\tmodint"),0],
       caml_string_of_jsbytes("\tmodint")],
     _a0_=
      [0,
       [11,caml_string_of_jsbytes("\tandint"),0],
       caml_string_of_jsbytes("\tandint")],
     _a1_=
      [0,
       [11,caml_string_of_jsbytes("\torint"),0],
       caml_string_of_jsbytes("\torint")],
     _a2_=
      [0,
       [11,caml_string_of_jsbytes("\txorint"),0],
       caml_string_of_jsbytes("\txorint")],
     _a3_=
      [0,
       [11,caml_string_of_jsbytes("\tlslint"),0],
       caml_string_of_jsbytes("\tlslint")],
     _a4_=
      [0,
       [11,caml_string_of_jsbytes("\tlsrint"),0],
       caml_string_of_jsbytes("\tlsrint")],
     _a5_=
      [0,
       [11,caml_string_of_jsbytes("\tasrint"),0],
       caml_string_of_jsbytes("\tasrint")],
     _a6_=
      [0,
       [11,caml_string_of_jsbytes("\tisint"),0],
       caml_string_of_jsbytes("\tisint")],
     _a7_=
      [0,
       [11,caml_string_of_jsbytes("\tisout"),0],
       caml_string_of_jsbytes("\tisout")],
     _a8_=
      [0,
       [11,caml_string_of_jsbytes("\tgetmethod"),0],
       caml_string_of_jsbytes("\tgetmethod")],
     _a9_=
      [0,
       [11,caml_string_of_jsbytes("\tgetdynmet"),0],
       caml_string_of_jsbytes("\tgetdynmet")],
     _a__=
      [0,
       [11,caml_string_of_jsbytes("\tstop"),0],
       caml_string_of_jsbytes("\tstop")],
     _a$_=[0,[12,76,[4,3,0,0,[12,58,0]]],caml_string_of_jsbytes("L%i:")],
     _ba_=
      [0,
       [11,caml_string_of_jsbytes("\tacc "),[4,3,0,0,0]],
       caml_string_of_jsbytes("\tacc %i")],
     _bb_=
      [0,
       [11,caml_string_of_jsbytes("\tenvacc "),[4,3,0,0,0]],
       caml_string_of_jsbytes("\tenvacc %i")],
     _bc_=
      [0,
       [11,caml_string_of_jsbytes("\tpop "),[4,3,0,0,0]],
       caml_string_of_jsbytes("\tpop %i")],
     _bd_=
      [0,
       [11,caml_string_of_jsbytes("\tassign "),[4,3,0,0,0]],
       caml_string_of_jsbytes("\tassign %i")],
     _be_=
      [0,
       [11,caml_string_of_jsbytes("\tpush_retaddr L"),[4,3,0,0,0]],
       caml_string_of_jsbytes("\tpush_retaddr L%i")],
     _bf_=
      [0,
       [11,caml_string_of_jsbytes("\tapply "),[4,3,0,0,0]],
       caml_string_of_jsbytes("\tapply %i")],
     _bg_=
      [0,
       [11,
        caml_string_of_jsbytes("\tappterm "),
        [4,3,0,0,[11,caml_string_of_jsbytes(", "),[4,3,0,0,0]]]],
       caml_string_of_jsbytes("\tappterm %i, %i")],
     _bh_=
      [0,
       [11,caml_string_of_jsbytes("\treturn "),[4,3,0,0,0]],
       caml_string_of_jsbytes("\treturn %i")],
     _bi_=
      [0,
       [11,caml_string_of_jsbytes("\tgrab "),[4,3,0,0,0]],
       caml_string_of_jsbytes("\tgrab %i")],
     _bj_=
      [0,
       [11,
        caml_string_of_jsbytes("\tclosure L"),
        [4,3,0,0,[11,caml_string_of_jsbytes(", "),[4,3,0,0,0]]]],
       caml_string_of_jsbytes("\tclosure L%i, %i")],
     _bk_=
      [0,
       [11,caml_string_of_jsbytes("\tclosurerec"),0],
       caml_string_of_jsbytes("\tclosurerec")],
     _bm_=
      [0,
       [11,caml_string_of_jsbytes(", "),[4,3,0,0,0]],
       caml_string_of_jsbytes(", %i")],
     _bn_=
      [0,
       [11,caml_string_of_jsbytes("\toffsetclosure "),[4,3,0,0,0]],
       caml_string_of_jsbytes("\toffsetclosure %i")],
     _bo_=
      [0,
       [11,caml_string_of_jsbytes("\tgetglobal "),[15,0]],
       caml_string_of_jsbytes("\tgetglobal %a")],
     _bp_=
      [0,
       [11,caml_string_of_jsbytes("\tsetglobal "),[15,0]],
       caml_string_of_jsbytes("\tsetglobal %a")],
     _bq_=
      [0,
       [18,
        [1,
         [0,
          [11,caml_string_of_jsbytes("<10>"),0],
          caml_string_of_jsbytes("<10>")]],
        [11,
         caml_string_of_jsbytes("\tconst"),
         [17,[0,caml_string_of_jsbytes("@ "),1,0],[15,[17,0,0]]]]],
       caml_string_of_jsbytes("@[<10>\tconst@ %a@]")],
     _br_=
      [0,
       [11,
        caml_string_of_jsbytes("\tmakeblock "),
        [4,3,0,0,[11,caml_string_of_jsbytes(", "),[4,3,0,0,0]]]],
       caml_string_of_jsbytes("\tmakeblock %i, %i")],
     _bs_=
      [0,
       [11,caml_string_of_jsbytes("\tmakefloatblock "),[4,3,0,0,0]],
       caml_string_of_jsbytes("\tmakefloatblock %i")],
     _bt_=
      [0,
       [11,caml_string_of_jsbytes("\tgetfield "),[4,3,0,0,0]],
       caml_string_of_jsbytes("\tgetfield %i")],
     _bu_=
      [0,
       [11,caml_string_of_jsbytes("\tsetfield "),[4,3,0,0,0]],
       caml_string_of_jsbytes("\tsetfield %i")],
     _bv_=
      [0,
       [11,caml_string_of_jsbytes("\tgetfloatfield "),[4,3,0,0,0]],
       caml_string_of_jsbytes("\tgetfloatfield %i")],
     _bw_=
      [0,
       [11,caml_string_of_jsbytes("\tsetfloatfield "),[4,3,0,0,0]],
       caml_string_of_jsbytes("\tsetfloatfield %i")],
     _bx_=
      [0,
       [11,caml_string_of_jsbytes("\tbranch L"),[4,3,0,0,0]],
       caml_string_of_jsbytes("\tbranch L%i")],
     _by_=
      [0,
       [11,caml_string_of_jsbytes("\tbranchif L"),[4,3,0,0,0]],
       caml_string_of_jsbytes("\tbranchif L%i")],
     _bz_=
      [0,
       [11,caml_string_of_jsbytes("\tbranchifnot L"),[4,3,0,0,0]],
       caml_string_of_jsbytes("\tbranchifnot L%i")],
     _bA_=
      [0,
       [11,caml_string_of_jsbytes("\tstrictbranchif L"),[4,3,0,0,0]],
       caml_string_of_jsbytes("\tstrictbranchif L%i")],
     _bB_=
      [0,
       [11,caml_string_of_jsbytes("\tstrictbranchifnot L"),[4,3,0,0,0]],
       caml_string_of_jsbytes("\tstrictbranchifnot L%i")],
     _bD_=
      [0,
       [18,
        [1,
         [0,
          [11,caml_string_of_jsbytes("<10>"),0],
          caml_string_of_jsbytes("<10>")]],
        [11,caml_string_of_jsbytes("\tswitch"),[15,[12,47,[15,[17,0,0]]]]]],
       caml_string_of_jsbytes("@[<10>\tswitch%a/%a@]")],
     _bE_=
      [0,
       [11,caml_string_of_jsbytes("\tpushtrap L"),[4,3,0,0,0]],
       caml_string_of_jsbytes("\tpushtrap L%i")],
     _bF_=[0,[12,9,[2,0,0]],caml_string_of_jsbytes("\t%s")],
     _bG_=
      [0,
       [11,
        caml_string_of_jsbytes("\tccall "),
        [2,0,[11,caml_string_of_jsbytes(", "),[4,3,0,0,0]]]],
       caml_string_of_jsbytes("\tccall %s, %i")],
     _bH_=
      [0,
       [11,caml_string_of_jsbytes("\teqint"),0],
       caml_string_of_jsbytes("\teqint")],
     _bI_=
      [0,
       [11,caml_string_of_jsbytes("\tneqint"),0],
       caml_string_of_jsbytes("\tneqint")],
     _bJ_=
      [0,
       [11,caml_string_of_jsbytes("\tltint"),0],
       caml_string_of_jsbytes("\tltint")],
     _bK_=
      [0,
       [11,caml_string_of_jsbytes("\tgtint"),0],
       caml_string_of_jsbytes("\tgtint")],
     _bL_=
      [0,
       [11,caml_string_of_jsbytes("\tleint"),0],
       caml_string_of_jsbytes("\tleint")],
     _bM_=
      [0,
       [11,caml_string_of_jsbytes("\tgeint"),0],
       caml_string_of_jsbytes("\tgeint")],
     _bN_=
      [0,
       [11,caml_string_of_jsbytes("\toffsetint "),[4,3,0,0,0]],
       caml_string_of_jsbytes("\toffsetint %i")],
     _bO_=
      [0,
       [11,caml_string_of_jsbytes("\toffsetref "),[4,3,0,0,0]],
       caml_string_of_jsbytes("\toffsetref %i")],
     _bP_=
      [0,
       [11,caml_string_of_jsbytes("\tgetpubmet "),[4,3,0,0,0]],
       caml_string_of_jsbytes("\tgetpubmet %i")],
     _bQ_=
      [0,
       [11,
        caml_string_of_jsbytes('\tevent "'),
        [2,0,[11,caml_string_of_jsbytes('" '),[4,3,0,0,[12,45,[4,3,0,0,0]]]]]],
       caml_string_of_jsbytes('\tevent "%s" %i-%i')],
     _bY_=[1,0],
     _bX_=[1,0],
     _bV_=
      [0,
       [11,
        caml_string_of_jsbytes("Generated "),
        [2,
         0,
         [12,
          32,
          [3,
           0,
           [11,
            caml_string_of_jsbytes(" cannot be used on a 32-bit platform"),
            0]]]]],
       caml_string_of_jsbytes
        ("Generated %s %S cannot be used on a 32-bit platform")],
     _bU_=[0,2,0],
     _b8_=
      [0,
       [11,
        caml_string_of_jsbytes("Error while building custom runtime system"),
        0],
       caml_string_of_jsbytes("Error while building custom runtime system")],
     _b9_=
      [0,
       [11,caml_string_of_jsbytes("Cannot find file "),[15,0]],
       caml_string_of_jsbytes("Cannot find file %a")],
     _b__=
      [0,
       [11,
        caml_string_of_jsbytes("The file "),
        [15,[11,caml_string_of_jsbytes(" is not a bytecode object file"),0]]],
       caml_string_of_jsbytes("The file %a is not a bytecode object file")],
     _b$_=
      [0,
       [11,
        caml_string_of_jsbytes("The output file "),
        [2,
         0,
         [11,
          caml_string_of_jsbytes
           (" has the wrong name. The extension implies an object file but the link step was requested"),
          0]]],
       caml_string_of_jsbytes
        ("The output file %s has the wrong name. The extension implies an object file but the link step was requested")],
     _ca_=
      [0,
       [11,
        caml_string_of_jsbytes("Error while linking "),
        [15,[12,58,[17,[0,caml_string_of_jsbytes("@ "),1,0],[15,0]]]]],
       caml_string_of_jsbytes("Error while linking %a:@ %a")],
     _cb_=
      [0,
       [18,
        [1,
         [0,
          [11,caml_string_of_jsbytes("<hov>"),0],
          caml_string_of_jsbytes("<hov>")]],
        [11,
         caml_string_of_jsbytes("Files "),
         [15,
          [17,
           [0,caml_string_of_jsbytes("@ "),1,0],
           [11,
            caml_string_of_jsbytes("and "),
            [15,
             [17,
              [0,caml_string_of_jsbytes("@ "),1,0],
              [11,
               caml_string_of_jsbytes
                ("make inconsistent assumptions over interface "),
               [2,0,[17,0,0]]]]]]]]]],
       caml_string_of_jsbytes
        ("@[<hov>Files %a@ and %a@ make inconsistent assumptions over interface %s@]")],
     _cc_=
      [0,
       [11,caml_string_of_jsbytes("Cannot overwrite existing file "),[15,0]],
       caml_string_of_jsbytes("Cannot overwrite existing file %a")],
     _cd_=
      [0,
       [11,
        caml_string_of_jsbytes("Error on dynamically loaded library: "),
        [15,0]],
       caml_string_of_jsbytes("Error on dynamically loaded library: %a")],
     _ce_=
      [0,
       [11,
        caml_string_of_jsbytes("Required module `"),
        [2,0,[11,caml_string_of_jsbytes("' is unavailable"),0]]],
       caml_string_of_jsbytes("Required module `%s' is unavailable")],
     _cf_=
      [0,
       [11,
        caml_string_of_jsbytes("System error while copying file "),
        [2,0,[11,caml_string_of_jsbytes(": "),[2,0,0]]]],
       caml_string_of_jsbytes("System error while copying file %s: %s")],
     _b7_=[0,caml_string_of_jsbytes("std_exit.cmo"),0],
     _b6_=[0,1,[0,2,[0,6,0]]],
     _b5_=
      [0,
       [11,
        caml_string_of_jsbytes("-fdebug-prefix-map="),
        [2,0,[11,caml_string_of_jsbytes("=camlprim.c"),0]]],
       caml_string_of_jsbytes("-fdebug-prefix-map=%s=camlprim.c")],
     _b4_=
      [0,
       [11,
        caml_string_of_jsbytes("\n0x"),
        [4,6,0,0,[11,caml_string_of_jsbytes("};\n\n"),0]]],
       caml_string_of_jsbytes("\n0x%x};\n\n")],
     _b3_=[0,1,[0,4,[0,3,[0,6,0]]]],
     _b2_=
      [0,
       [4,0,0,0,[11,caml_string_of_jsbytes(", "),0]],
       caml_string_of_jsbytes("%d, ")],
     _b1_=
      [0,
       [11,
        caml_string_of_jsbytes("0x"),
        [4,
         6,
         [0,2,2],
         0,
         [4,
          6,
          [0,2,2],
          0,
          [4,6,[0,2,2],0,[4,6,[0,2,2],0,[11,caml_string_of_jsbytes(", "),0]]]]]],
       caml_string_of_jsbytes("0x%02x%02x%02x%02x, ")],
     _b0_=[0,1,[0,4,[0,3,[0,6,0]]]],
     _ch_=
      [0,
       [11,caml_string_of_jsbytes("Cannot find file "),[2,0,0]],
       caml_string_of_jsbytes("Cannot find file %s")],
     _ci_=
      [0,
       [11,
        caml_string_of_jsbytes("The file "),
        [15,[11,caml_string_of_jsbytes(" is not a bytecode object file"),0]]],
       caml_string_of_jsbytes("The file %a is not a bytecode object file")],
     _cl_=
      [0,
       [11,
        caml_string_of_jsbytes("Forward reference to "),
        [2,0,[11,caml_string_of_jsbytes(" in file "),[15,0]]]],
       caml_string_of_jsbytes("Forward reference to %s in file %a")],
     _cm_=
      [0,
       [11,
        caml_string_of_jsbytes("File "),
        [15,[11,caml_string_of_jsbytes(" redefines "),[2,0,0]]]],
       caml_string_of_jsbytes("File %a redefines %s")],
     _cn_=
      [0,
       [15,[11,caml_string_of_jsbytes(" is not a bytecode object file"),0]],
       caml_string_of_jsbytes("%a is not a bytecode object file")],
     _co_=
      [0,
       [11,
        caml_string_of_jsbytes("Wrong file naming: "),
        [15,
         [17,
          [0,caml_string_of_jsbytes("@ "),1,0],
          [11,
           caml_string_of_jsbytes("contains the code for"),
           [17,
            [0,caml_string_of_jsbytes("@ "),1,0],
            [2,
             0,
             [11,
              caml_string_of_jsbytes(" when "),
              [2,0,[11,caml_string_of_jsbytes(" was expected"),0]]]]]]]]],
       caml_string_of_jsbytes
        ("Wrong file naming: %a@ contains the code for@ %s when %s was expected")],
     _cp_=
      [0,
       [11,
        caml_string_of_jsbytes("File "),
        [2,0,[11,caml_string_of_jsbytes(" not found"),0]]],
       caml_string_of_jsbytes("File %s not found")],
     _ck_=[0,[15,[17,4,0]],caml_string_of_jsbytes("%a@.")],
     _cs_=[0,1],
     _cr_=[0,1];
    function new_label(param){label_counter[1]++;return label_counter[1]}
    var empty_env=[0,Ident[27],Ident[27],Ident[27]];
    function add_var(id,pos,env)
     {var _jK_=env[3],_jL_=env[2];
      return [0,caml_call3(Ident[28],id,pos,env[1]),_jL_,_jK_]}
    function add_vars(idlist,pos,env)
     {var idlist$0=idlist,pos$0=pos,env$0=env;
      for(;;)
       {if(idlist$0)
         {var
           rem=idlist$0[2],
           id=idlist$0[1],
           env$1=add_var(id,pos$0,env$0),
           pos$1=pos$0 + 1 | 0,
           idlist$0=rem,
           pos$0=pos$1,
           env$0=env$1;
          continue}
        return env$0}}
    function label_code(cont)
     {if(cont)
       {var _jJ_=cont[1];
        if(typeof _jJ_ !== "number")
         switch(_jJ_[0])
          {case 0:var lbl$0=_jJ_[1];return [0,lbl$0,cont];
           case 22:var lbl$1=_jJ_[1];return [0,lbl$1,cont]
           }}
      var lbl=new_label(0);
      return [0,lbl,[0,[0,lbl],cont]]}
    function make_branch_2(lbl,n,cont,param)
     {var n$0=n,param$0=param;
      for(;;)
       {if(param$0)
         {var _jI_=param$0[1];
          if(typeof _jI_ !== "number")
           switch(_jI_[0])
            {case 0:var param$1=param$0[2],param$0=param$1;continue;
             case 3:
              var
               param$2=param$0[2],
               m=_jI_[1],
               n$1=n$0 + m | 0,
               n$0=n$1,
               param$0=param$2;
              continue;
             case 8:var m$0=_jI_[1];return [0,[8,n$0 + m$0 | 0],cont]
             }}
        if(lbl){var lbl$0=lbl[1];return [0,[22,lbl$0],cont]}
        var lbl$1=new_label(0);
        return [0,[22,lbl$1],[0,[0,lbl$1],cont]]}}
    function make_branch(cont)
     {if(cont)
       {var _jH_=cont[1];
        if(typeof _jH_ !== "number")
         switch(_jH_[0])
          {case 0:var lbl=_jH_[1];return make_branch_2([0,lbl],0,cont,cont);
           case 8:return [0,_jH_,cont];
           case 22:return [0,_jH_,cont];
           case 29:var k=_jH_[1];return [0,[29,k],cont]
           }}
      return make_branch_2(0,0,cont,cont)}
    function branch_to(label,cont)
     {if(cont)
       {var _jG_=cont[1],switch$0=0;
        if(typeof _jG_ === "number" || ! (0 === _jG_[0]))
         switch$0 = 1;
        else
         {var label0=_jG_[1];if(label === label0)return cont}}
      return [0,[22,label],cont]}
    function discard_dead_code(cont)
     {var cont$0=cont;
      for(;;)
       {if(cont$0)
         {var switch$0=0,_jF_=cont$0[1];
          if(typeof _jF_ === "number")
           {if(1 === _jF_)switch$0 = 1}
          else
           switch(_jF_[0]){case 0:case 14:switch$0 = 1;break}
          if(switch$0)return cont$0;
          var cont$1=cont$0[2],cont$0=cont$1;
          continue}
        return 0}}
    function is_tailcall(param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var _jE_=param$0[1];
          if(typeof _jE_ !== "number")
           switch(_jE_[0])
            {case 0:var param$1=param$0[2],param$0=param$1;continue;
             case 3:var param$2=param$0[2],param$0=param$2;continue;
             case 8:return 1
             }}
        return 0}}
    function preserve_tailcall_for_prim(param)
     {if(typeof param === "number")
       {var switch$0=0;
        if(9 <= param)
         {if(42 <= param)switch$0 = 1}
        else
         switch(param){case 1:case 2:case 3:case 6:break;default:switch$0 = 1}
        if(switch$0)return 1}
      return 0}
    function add_pop(n,cont)
     {var n$0=n,cont$0=cont;
      for(;;)
       {if(0 === n$0)return cont$0;
        if(cont$0)
         {var _jD_=cont$0[1];
          if(typeof _jD_ !== "number")
           switch(_jD_[0])
            {case 3:
              var
               cont$1=cont$0[2],
               m=_jD_[1],
               n$1=n$0 + m | 0,
               n$0=n$1,
               cont$0=cont$1;
              continue;
             case 8:
              var cont$2=cont$0[2],m$0=_jD_[1];
              return [0,[8,n$0 + m$0 | 0],cont$2];
             case 29:return cont$0
             }}
        return [0,[3,n$0],cont$0]}}
    function add_const_unit(cont)
     {if(cont)
       {var _jC_=cont[1];
        if(typeof _jC_ !== "number")
         switch(_jC_[0]){case 1:case 5:case 13:case 15:return cont}}
      return [0,[15,Lambda[8]],cont]}
    function push_dummies(n,k)
     {if(0 === n)return k;
      var _jB_=[0,0,push_dummies(n - 1 | 0,k)];
      return [0,[15,Lambda[8]],_jB_]}
    function check_recordwith_updates(id,e)
     {var e$0=e;
      for(;;)
       {switch(e$0[0])
         {case 0:var id2=e$0[1];return caml_equal(id2,id);
          case 13:
           var _jv_=e$0[1];
           if(6 === _jv_[0])
            {var switch$0=0,_jw_=_jv_[1];
             if(typeof _jw_ === "number")
              switch$0 = 1;
             else
              switch(_jw_[0])
               {case 4:
                case 7:
                 var _jx_=_jv_[2];
                 if(_jx_)
                  {var _jy_=_jx_[1];
                   if(0 === _jy_[0])
                    {var _jz_=_jx_[2];
                     if(_jz_ && ! _jz_[2])
                      {var cont=e$0[2],id2$0=_jy_[1],_jA_=caml_equal(id2$0,id);
                       if(_jA_){var e$0=cont;continue}
                       return _jA_}}}
                 break;
                default:switch$0 = 1}}
           break
          }
        return 0}}
    function size_of_lambda(env,funct)
     {var env$0=env,funct$0=funct;
      for(;;)
       {switch(funct$0[0])
         {case 0:
           var id=funct$0[1];
           try
            {var _je_=caml_call2(Ident[29],id,env$0);return _je_}
           catch(_ju_)
            {_ju_ = caml_wrap_exception(_ju_);
             if(_ju_ === Stdlib[8])return 0;
             throw _ju_}
          case 3:
           var
            match=funct$0[1],
            params=match[2],
            _jf_=caml_call1(Stdlib_list[1],params),
            _jg_=caml_call1(Lambda[15],funct$0);
           return [3,1 + caml_call1(Ident[6][21],_jg_) | 0,_jf_];
          case 4:
           if(! funct$0[1])
            {var _ji_=funct$0[4];
             if(6 === _ji_[0])
              {var _jj_=_ji_[1],switch$0=0;
               if(typeof _jj_ === "number" || ! (8 === _jj_[0]))
                switch$0 = 1;
               else
                {var
                  body$0=funct$0[5],
                  size=_jj_[2],
                  kind=_jj_[1],
                  id$1=funct$0[3];
                 if(check_recordwith_updates(id$1,body$0))
                  {if(typeof kind === "number")
                    {if(1 === kind)return [2,size]}
                   else
                    switch(kind[0])
                     {case 0:throw [0,Assert_failure,_a_];
                      case 2:return [0,size + 1 | 0]
                      }
                   return [0,size]}}}}
           var
            body=funct$0[5],
            arg=funct$0[4],
            id$0=funct$0[3],
            _jh_=size_of_lambda(env$0,arg),
            env$1=caml_call3(Ident[28],id$0,_jh_,env$0),
            env$0=env$1,
            funct$0=body;
           continue;
          case 5:
           var
            bindings=funct$0[1],
            body$1=funct$0[2],
            _jk_=function(param){return 3 === param[2][0]?1:0};
           if(caml_call2(Stdlib_list[30],_jk_,bindings))
            {var
              _jl_=caml_call1(Lambda[15],[5,bindings,Lambda[9]]),
              fv=caml_call1(Ident[6][22],_jl_),
              _jm_=caml_call1(Stdlib_list[1],fv),
              blocksize=
               ((caml_call1(Stdlib_list[1],bindings) * 2 | 0) - 1 | 0)
               +
               _jm_
               |
               0,
              _jn_=function(i,param){var id=param[1];return [0,id,i * 2 | 0]},
              offsets=caml_call2(Stdlib_list[18],_jn_,bindings),
              _jo_=
               function(blocksize)
                 {return function(param,env)
                   {var offset=param[2],id=param[1];
                    return caml_call3(Ident[28],id,[1,blocksize,offset],env)}}
                (blocksize),
              env$2=caml_call3(Stdlib_list[24],_jo_,offsets,env$0),
              env$0=env$2,
              funct$0=body$1;
             continue}
           var
            body$2=funct$0[2],
            _jp_=
             function(param,env)
              {var e=param[2],id=param[1],_jt_=size_of_lambda(env,e);
               return caml_call3(Ident[28],id,_jt_,env)},
            env$3=caml_call3(Stdlib_list[24],_jp_,bindings,env$0),
            env$0=env$3,
            funct$0=body$2;
           continue;
          case 6:
           var _jq_=funct$0[1];
           if(typeof _jq_ !== "number")
            switch(_jq_[0])
             {case 2:
               var args=funct$0[2];return [0,caml_call1(Stdlib_list[1],args)];
              case 8:
               var _jr_=_jq_[1];
               if(typeof _jr_ === "number")
                {if(1 === _jr_){var size$1=_jq_[2];return [2,size$1]}}
               else
                switch(_jr_[0])
                 {case 0:throw [0,Assert_failure,_b_];
                  case 2:var size$2=_jq_[2];return [0,size$2 + 1 | 0]
                  }
               var size$0=_jq_[2];
               return [0,size$0];
              case 18:
               var _js_=_jq_[1];
               if(_js_)
                {if(3 <= _js_)
                  {var args$0=funct$0[2];
                   return [2,caml_call1(Stdlib_list[1],args$0)]}
                 var args$1=funct$0[2];
                 return [0,caml_call1(Stdlib_list[1],args$1)]}
               return 0
              }
           break;
          case 13:var funct$1=funct$0[2],funct$0=funct$1;continue;
          case 18:var funct$2=funct$0[1],funct$0=funct$2;continue
          }
        return 0}}
    function copy_event(ev,kind,info,repr)
     {return [0,0,ev[2],ev[3],kind,ev[5],info,ev[7],ev[8],ev[9],ev[10],repr]}
    function merge_events(ev$0,ev)
     {var _ja_=ev$0[4],_jb_=ev[4],switch$0=0;
      if(typeof _ja_ === "number")
       if(_ja_)
        var min=ev$0,maj=ev;
       else
        {var switch$1=0;
         if(typeof _jb_ === "number" && _jb_){switch$0 = 1;switch$1 = 1}
         if(! switch$1)var min=ev$0,maj=ev}
      else
       {var switch$2=0;
        if(typeof _jb_ === "number" && _jb_){switch$0 = 1;switch$2 = 1}
        if(! switch$2)var min=ev,maj=ev$0}
      if(switch$0)var min=ev,maj=ev$0;
      var _i8_=maj[11],_i9_=min[11],switch$3=0;
      if(typeof _i8_ === "number")
       var _jc_=_i9_;
      else
       if(0 === _i8_[0])
        {var _i__=_i8_[1];
         if(typeof _i9_ === "number")
          switch$3 = 2;
         else
          if(0 === _i9_[0])
           switch$3 = 1;
          else
           {var r=_i9_[1],switch$4=0;
            if(_i__ === r && 1 === _i__[1]){var _jc_=0;switch$4 = 1}
            if(! switch$4)switch$3 = 1}}
       else
        {var _i$_=_i8_[1];
         if(typeof _i9_ === "number")
          switch$3 = 2;
         else
          if(0 === _i9_[0])
           {var r$0=_i9_[1];
            if(_i$_ === r$0)var _jc_=[0,_i$_];else switch$3 = 1}
          else
           switch$3 = 1}
      switch(switch$3)
       {case 2:var _jc_=_i8_;break;
        case 1:var _jc_=caml_call1(Misc[1],cst_Bytegen_merge_repr);break
        }
      var _i6_=maj[6],_i7_=min[6],switch$5=0;
      if(typeof _i6_ === "number" && _i6_)var _jd_=_i7_;else switch$5 = 1;
      if(switch$5)
       {var switch$6=0;
        if(typeof _i7_ === "number" && _i7_)var _jd_=_i6_;else switch$6 = 1;
        if(switch$6)var _jd_=caml_call1(Misc[1],cst_Bytegen_merge_infos)}
      return copy_event(maj,maj[4],_jd_,_jc_)}
    function weaken_event(ev,cont)
     {if(typeof ev[4] === "number")return [0,[35,ev],cont];
      if(cont)
       {var _i2_=cont[1];
        if(typeof _i2_ === "number" && ! _i2_)
         {var _i3_=cont[2];
          if(_i3_)
           {var _i4_=_i3_[1],switch$0=0;
            if(typeof _i4_ === "number" || ! (35 === _i4_[0]))
             switch$0 = 1;
            else
             {var _i5_=_i4_[1];
              if(typeof _i5_[11] === "number")
               {var c=_i3_[2];
                if(typeof ev[6] === "number")return cont;
                var
                 repr=[0,1],
                 ev$0=copy_event(ev,1,ev[6],[0,repr]),
                 ev$1=copy_event(_i5_,_i5_[4],_i5_[6],[1,repr]);
                return [0,[35,ev$0],[0,0,[0,[35,ev$1],c]]]}}}}}
      return [0,[35,ev],cont]}
    function add_event(ev,cont)
     {if(cont)
       {var _i1_=cont[1];
        if(typeof _i1_ !== "number" && 35 === _i1_[0])
         {var cont$0=cont[2],ev$0=_i1_[1];
          return weaken_event(merge_events(ev,ev$0),cont$0)}}
      return weaken_event(ev,cont)}
    function add_pseudo_event(loc,modname,c)
     {if(Clflags[17][1])
       {var
         ev_defname=caml_call1(Debuginfo[1][10],loc),
         _i0_=Subst[1],
         ev=
          [0,
           0,
           modname,
           caml_call1(Debuginfo[1][9],loc),
           1,
           ev_defname,
           1,
           0,
           _i0_,
           empty_env,
           0,
           0];
        return add_event(ev,c)}
      return c}
    var try_blocks=[0,0],sz_static_raises=[0,0];
    function push_static_raise(i,lbl_handler,sz)
     {sz_static_raises[1]
      =
      [0,[0,i,[0,lbl_handler,sz,try_blocks[1]]],sz_static_raises[1]];
      return 0}
    function find_raise_label(i)
     {try
       {var _iY_=caml_call2(Stdlib_list[43],i,sz_static_raises[1]);
        return _iY_}
      catch(_iZ_)
       {_iZ_ = caml_wrap_exception(_iZ_);
        if(_iZ_ === Stdlib[8])
         {var
           _iV_=caml_call1(Stdlib_int[10],i),
           _iW_=caml_call2(Stdlib[28],_iV_,cst_outside_appropriated_catch),
           _iX_=caml_call2(Stdlib[28],cst_exit,_iW_);
          return caml_call1(Misc[1],_iX_)}
        throw _iZ_}}
    function code_as_jump(l,sz)
     {if(9 === l[0] && ! l[2])
       {var
         i=l[1],
         match=find_raise_label(i),
         tb=match[3],
         size=match[2],
         label=match[1];
        if(sz === size && tb === try_blocks[1])return [0,label];
        return 0}
      return 0}
    var
     functions_to_compile=caml_call1(Stdlib_stack[2],0),
     compunit_name=[0,cst],
     max_stack_used=[0,0];
    function comp_bint_primitive(bi,suff,args)
     {switch(bi)
       {case 0:var pref=cst_caml_nativeint;break;
        case 1:var pref=cst_caml_int32;break;
        default:var pref=cst_caml_int64}
      var _iU_=caml_call1(Stdlib_list[1],args);
      return [30,caml_call2(Stdlib[28],pref,suff),_iU_]}
    function comp_primitive(p,args)
     {if(typeof p === "number")
       switch(p)
        {case 1:return _c_;
         case 2:return _d_;
         case 6:return 3;
         case 10:return 11;
         case 11:return 12;
         case 12:return 13;
         case 13:return 14;
         case 14:return 17;
         case 15:return 18;
         case 16:return 19;
         case 17:return 20;
         case 18:return 21;
         case 19:return 22;
         case 20:return _e_;
         case 21:return _f_;
         case 22:return _g_;
         case 23:return _h_;
         case 24:return _i_;
         case 25:return _j_;
         case 26:return _k_;
         case 27:return _l_;
         case 28:return _m_;
         case 29:return _n_;
         case 30:return _o_;
         case 31:return 5;
         case 32:return _p_;
         case 33:return _q_;
         case 34:return 6;
         case 35:return 7;
         case 36:return _r_;
         case 37:return _s_;
         case 38:return 23;
         case 39:return 24;
         case 40:return _t_;
         case 41:return _u_
         }
      else
       switch(p[0])
        {case 0:var id=p[1];return [13,id];
         case 1:var id$0=p[1];return [14,id$0];
         case 3:var n=p[1];return [18,n];
         case 4:var n$0=p[1];return [19,n$0];
         case 5:return 4;
         case 7:var n$1=p[1];return [21,n$1];
         case 8:return _v_;
         case 9:var p$0=p[1];return [30,p$0[1],p$0[2]];
         case 11:return 15;
         case 12:return 16;
         case 13:var cmp=p[1];return [31,cmp];
         case 14:var bi=p[1];return comp_bint_primitive(bi,cst_compare,args);
         case 15:var n$2=p[1];return [32,n$2];
         case 16:var n$3=p[1];return [33,n$3];
         case 20:return 2;
         case 21:var _iN_=p[1];return _iN_?3 <= _iN_?_w_:3:_x_;
         case 22:var _iO_=p[1];return _iO_?3 <= _iO_?_y_:4:_z_;
         case 23:var _iP_=p[1];return _iP_?3 <= _iP_?_A_:_B_:_C_;
         case 24:var _iQ_=p[1];return _iQ_?3 <= _iQ_?_D_:_E_:_F_;
         case 25:
          var bi$0=p[1];return comp_bint_primitive(bi$0,cst_of_int,args);
         case 26:
          var bi$1=p[1];return comp_bint_primitive(bi$1,cst_to_int,args);
         case 27:
          switch(p[1])
           {case 0:
             switch(p[2]){case 0:break;case 1:return _G_;default:return _H_}
             break;
            case 1:
             switch(p[2]){case 0:return _I_;case 1:break;default:return _J_}
             break;
            default:switch(p[2]){case 0:return _K_;case 1:return _L_}}
          break;
         case 28:var bi$2=p[1];return comp_bint_primitive(bi$2,cst_neg,args);
         case 29:var bi$3=p[1];return comp_bint_primitive(bi$3,cst_add,args);
         case 30:var bi$4=p[1];return comp_bint_primitive(bi$4,cst_sub,args);
         case 31:var bi$5=p[1];return comp_bint_primitive(bi$5,cst_mul,args);
         case 32:var bi$6=p[1];return comp_bint_primitive(bi$6,cst_div,args);
         case 33:var bi$7=p[1];return comp_bint_primitive(bi$7,cst_mod,args);
         case 34:var bi$8=p[1];return comp_bint_primitive(bi$8,cst_and,args);
         case 35:var bi$9=p[1];return comp_bint_primitive(bi$9,cst_or,args);
         case 36:
          var bi$10=p[1];return comp_bint_primitive(bi$10,cst_xor,args);
         case 37:
          var bi$11=p[1];
          return comp_bint_primitive(bi$11,cst_shift_left,args);
         case 38:
          var bi$12=p[1];
          return comp_bint_primitive(bi$12,cst_shift_right_unsigned,args);
         case 39:
          var bi$13=p[1];
          return comp_bint_primitive(bi$13,cst_shift_right,args);
         case 40:
          switch(p[2])
           {case 0:return _M_;
            case 1:return _N_;
            case 2:return _O_;
            case 3:return _P_;
            case 4:return _Q_;
            default:return _R_}
         case 41:
          var n$4=p[2],_iR_=caml_call1(Stdlib_int[10],n$4);
          return [30,caml_call2(Stdlib[28],cst_caml_ba_get,_iR_),n$4 + 1 | 0];
         case 42:
          var n$5=p[2],_iS_=caml_call1(Stdlib_int[10],n$5);
          return [30,caml_call2(Stdlib[28],cst_caml_ba_set,_iS_),n$5 + 2 | 0];
         case 43:
          var n$6=p[1],_iT_=caml_call1(Stdlib_int[10],n$6);
          return [30,caml_call2(Stdlib[28],cst_caml_ba_dim,_iT_),1];
         case 44:return _S_;
         case 45:return _T_;
         case 46:return _U_;
         case 47:return _V_;
         case 48:return _W_;
         case 49:return _X_;
         case 50:return _Y_;
         case 51:return _Z_;
         case 52:return ___;
         case 53:return _$_;
         case 54:return _aa_;
         case 55:return _ab_;
         case 56:return _ac_;
         case 57:return _ad_;
         case 58:return _ae_;
         case 59:
          var c=p[1];
          switch(c)
           {case 0:var const_name=cst_big_endian;break;
            case 1:var const_name=cst_word_size;break;
            case 2:var const_name=cst_int_size;break;
            case 3:var const_name=cst_max_wosize;break;
            case 4:var const_name=cst_ostype_unix;break;
            case 5:var const_name=cst_ostype_win32;break;
            case 6:var const_name=cst_ostype_cygwin;break;
            default:var const_name=cst_backend_type}
          return [30,caml_call2(Stdlib_printf[4],_af_,const_name),1];
         case 60:
          var bi$14=p[1];return comp_bint_primitive(bi$14,cst_bswap,args)
         }
      return caml_call1(Misc[1],cst_Bytegen_comp_primitive)}
    function is_immed(n)
     {var _iL_=-1073741824 <= n?1:0,_iM_=_iL_?n <= 1073741823?1:0:_iL_;
      return _iM_}
    var
     compare_key=runtime.caml_compare,
     make_key=Lambda[7],
     Storer=caml_call1(Switch[3],[0,compare_key,make_key]);
    function comp_expr$0(counter,env,exp,sz,cont)
     {var exp$0=exp,cont$0=cont;
      for(;;)
       {if(max_stack_used[1] < sz)max_stack_used[1] = sz;
        switch(exp$0[0])
         {case 0:
           var id=exp$0[1];
           try
            {var
              pos$0=caml_call2(Ident[29],id,env[1]),
              _gV_=[0,[1,sz - pos$0 | 0],cont$0];
             return _gV_}
           catch(_iI_)
            {_iI_ = caml_wrap_exception(_iI_);
             if(_iI_ === Stdlib[8])
              try
               {var
                 pos=caml_call2(Ident[29],id,env[2]),
                 _gU_=[0,[2,pos],cont$0];
                return _gU_}
              catch(_iJ_)
               {_iJ_ = caml_wrap_exception(_iJ_);
                if(_iJ_ === Stdlib[8])
                 try
                  {var
                    ofs=caml_call2(Ident[29],id,env[3]),
                    _gT_=[0,[12,ofs],cont$0];
                   return _gT_}
                 catch(_iK_)
                  {_iK_ = caml_wrap_exception(_iK_);
                   if(_iK_ === Stdlib[8])
                    {var
                      _gR_=caml_call1(Ident[16],id),
                      _gS_=caml_call2(Stdlib[28],cst_Bytegen_comp_expr_var,_gR_);
                     return caml_call1(Misc[1],_gS_)}
                   throw _iK_}
                throw _iJ_}
             throw _iI_}
          case 1:var cst=exp$0[1];return [0,[15,cst],cont$0];
          case 2:
           var
            match=exp$0[1],
            args=match[2],
            func=match[1],
            nargs=caml_call1(Stdlib_list[1],args);
           if(is_tailcall(cont$0))
            {var
              _gW_=
               [0,
                0,
                comp_expr
                 (env,
                  func,
                  sz + nargs | 0,
                  [0,[7,nargs,sz + nargs | 0],discard_dead_code(cont$0)])];
             if(counter < 50)
              {var counter$2=counter + 1 | 0;
               return comp_args$0(counter$2,env,args,sz,_gW_)}
             return caml_trampoline_return(comp_args$0,[0,env,args,sz,_gW_])}
           if(4 <= nargs)
            {var match$0=label_code(cont$0),cont1=match$0[2],lbl=match$0[1];
             return [0,
                     [5,lbl],
                     comp_args
                      (env,
                       args,
                       sz + 3 | 0,
                       [0,
                        0,
                        comp_expr
                         (env,func,(sz + 3 | 0) + nargs | 0,[0,[6,nargs],cont1])])]}
           var
            _gX_=
             [0,0,comp_expr(env,func,sz + nargs | 0,[0,[6,nargs],cont$0])];
           if(counter < 50)
            {var counter$3=counter + 1 | 0;
             return comp_args$0(counter$3,env,args,sz,_gX_)}
           return caml_trampoline_return(comp_args$0,[0,env,args,sz,_gX_]);
          case 3:
           var
            match$1=exp$0[1],
            loc=match$1[6],
            body=match$1[4],
            params=match$1[2],
            cont$1=add_pseudo_event(loc,compunit_name[1],cont$0),
            lbl$0=new_label(0),
            _gY_=caml_call1(Lambda[15],exp$0),
            fv=caml_call1(Ident[6][22],_gY_),
            _gZ_=0,
            _g0_=0,
            _g1_=1,
            _g2_=function(_iH_){return _iH_[1]},
            to_compile=
             [0,
              caml_call2(Stdlib_list[17],_g2_,params),
              body,
              lbl$0,
              fv,
              _g1_,
              _g0_,
              _gZ_];
           caml_call2(Stdlib_stack[3],to_compile,functions_to_compile);
           var
            _g3_=[0,[10,lbl$0,caml_call1(Stdlib_list[1],fv)],cont$1],
            _g4_=function(n){return [0,n]},
            _g5_=caml_call2(Stdlib_list[17],_g4_,fv);
           if(counter < 50)
            {var counter$4=counter + 1 | 0;
             return comp_args$0(counter$4,env,_g5_,sz,_g3_)}
           return caml_trampoline_return(comp_args$0,[0,env,_g5_,sz,_g3_]);
          case 4:
           var
            body$0=exp$0[5],
            arg=exp$0[4],
            id$0=exp$0[3],
            _g6_=add_pop(1,cont$0),
            cont$2=
             [0,
              0,
              comp_expr(add_var(id$0,sz + 1 | 0,env),body$0,sz + 1 | 0,_g6_)],
            exp$0=arg,
            cont$0=cont$2;
           continue;
          case 5:
           var
            body$1=exp$0[2],
            decl=exp$0[1],
            ndecl=caml_call1(Stdlib_list[1],decl),
            _g7_=function(param){return 3 === param[2][0]?1:0};
           if(caml_call2(Stdlib_list[30],_g7_,decl))
            {var
              _g8_=caml_call1(Lambda[15],[5,decl,Lambda[9]]),
              fv$0=caml_call1(Ident[6][22],_g8_),
              _g9_=function(param){var id=param[1];return id},
              rec_idents=caml_call2(Stdlib_list[17],_g9_,decl),
              comp_fun=
               function(pos,param)
                {if(param)
                  {var _iE_=param[1][2];
                   if(3 === _iE_[0])
                    {var
                      rem=param[2],
                      match=_iE_[1],
                      body=match[4],
                      params=match[2],
                      lbl=new_label(0),
                      _iF_=function(_iG_){return _iG_[1]},
                      to_compile=
                       [0,
                        caml_call2(Stdlib_list[17],_iF_,params),
                        body,
                        lbl,
                        fv$0,
                        ndecl,
                        rec_idents,
                        pos];
                     caml_call2(Stdlib_stack[3],to_compile,functions_to_compile);
                     return [0,lbl,comp_fun(pos + 1 | 0,rem)]}
                   throw [0,Assert_failure,_ag_]}
                 return 0},
              lbls=comp_fun(0,decl),
              _g__=add_pop(ndecl,cont$0),
              _g$_=
               comp_expr
                (add_vars(rec_idents,sz + 1 | 0,env),
                 body$1,
                 sz + ndecl | 0,
                 _g__),
              _ha_=[0,[11,lbls,caml_call1(Stdlib_list[1],fv$0)],_g$_],
              _hb_=function(n){return [0,n]},
              _hc_=caml_call2(Stdlib_list[17],_hb_,fv$0);
             if(counter < 50)
              {var counter$5=counter + 1 | 0;
               return comp_args$0(counter$5,env,_hc_,sz,_ha_)}
             return caml_trampoline_return(comp_args$0,[0,env,_hc_,sz,_ha_])}
           var
            _hd_=
             function(param)
              {var exp=param[2],id=param[1];
               return [0,id,exp,size_of_lambda(Ident[27],exp)]},
            decl_size=caml_call2(Stdlib_list[17],_hd_,decl),
            comp_rec=
             function(new_env,sz,i,param)
              {var i$0=i,param$0=param;
               for(;;)
                {if(param$0)
                  {var _iC_=param$0[1],_iD_=_iC_[2];
                   if(typeof _iC_[3] === "number")
                    {var
                      param$1=param$0[2],
                      i$1=i$0 - 1 | 0,
                      i$0=i$1,
                      param$0=param$1;
                     continue}
                   var rem=param$0[2];
                   return comp_expr
                           (new_env,
                            _iD_,
                            sz,
                            [0,
                             0,
                             [0,[1,i$0],[0,_am_,comp_rec(new_env,sz,i$0 - 1 | 0,rem)]]])}
                 return comp_expr(new_env,body$1,sz,add_pop(ndecl,cont$0))}},
            comp_nonrec=
             function(new_env,sz,i,param)
              {var i$0=i,param$0=param;
               for(;;)
                {if(param$0)
                  {var _iA_=param$0[1],_iB_=_iA_[2];
                   if(typeof _iA_[3] === "number")
                    {var rem=param$0[2];
                     return comp_expr
                             (new_env,
                              _iB_,
                              sz,
                              [0,[4,i$0 - 1 | 0],comp_nonrec(new_env,sz,i$0 - 1 | 0,rem)])}
                   var
                    param$1=param$0[2],
                    i$1=i$0 - 1 | 0,
                    i$0=i$1,
                    param$0=param$1;
                   continue}
                 return comp_rec(new_env,sz,ndecl,decl_size)}},
            comp_init=
             function(new_env,sz,param)
              {if(param)
                {var _ix_=param[1],_iy_=_ix_[3],_iz_=_ix_[1];
                 if(typeof _iy_ === "number")
                  {var rem=param[2];
                   return [0,
                           _ah_,
                           [0,
                            0,
                            comp_init(add_var(_iz_,sz + 1 | 0,new_env),sz + 1 | 0,rem)]]}
                 else
                  switch(_iy_[0])
                   {case 0:
                     var rem$0=param[2],blocksize=_iy_[1];
                     return [0,
                             [15,[0,[0,blocksize]]],
                             [0,
                              _ai_,
                              [0,
                               0,
                               comp_init(add_var(_iz_,sz + 1 | 0,new_env),sz + 1 | 0,rem$0)]]];
                    case 1:
                     var rem$1=param[2],offset=_iy_[2],blocksize$0=_iy_[1];
                     return [0,
                             [15,[0,[0,offset]]],
                             [0,
                              0,
                              [0,
                               [15,[0,[0,blocksize$0]]],
                               [0,
                                _aj_,
                                [0,
                                 0,
                                 comp_init(add_var(_iz_,sz + 1 | 0,new_env),sz + 1 | 0,rem$1)]]]]];
                    case 2:
                     var rem$2=param[2],blocksize$1=_iy_[1];
                     return [0,
                             [15,[0,[0,blocksize$1]]],
                             [0,
                              _ak_,
                              [0,
                               0,
                               comp_init(add_var(_iz_,sz + 1 | 0,new_env),sz + 1 | 0,rem$2)]]];
                    default:
                     var rem$3=param[2],arity=_iy_[2],blocksize$2=_iy_[1];
                     return [0,
                             [15,[0,[0,arity]]],
                             [0,
                              0,
                              [0,
                               [15,[0,[0,blocksize$2]]],
                               [0,
                                _al_,
                                [0,
                                 0,
                                 comp_init(add_var(_iz_,sz + 1 | 0,new_env),sz + 1 | 0,rem$3)]]]]]}}
               return comp_nonrec(new_env,sz,ndecl,decl_size)};
           return comp_init(env,sz,decl_size);
          case 6:
           var _he_=exp$0[1],switch$0=0;
           if(typeof _he_ === "number")
            switch(_he_)
             {case 3:
               var _hh_=exp$0[2];
               if(_hh_ && ! _hh_[2])
                {var
                  arg$0=_hh_[1],
                  cont$3=add_const_unit(cont$0),
                  exp$0=arg$0,
                  cont$0=cont$3;
                 continue}
               break;
              case 4:
               var _hi_=exp$0[2];
               if(_hi_)
                {var _hj_=_hi_[2];
                 if(_hj_ && ! _hj_[2])
                  {var loc$0=exp$0[3],arg$1=_hi_[1],func$0=_hj_[1];
                   switch$0 = 1}}
               break;
              case 5:
               var _hk_=exp$0[2];
               if(_hk_)
                {var _hl_=_hk_[2];
                 if(_hl_ && ! _hl_[2])
                  {var loc$0=exp$0[3],arg$1=_hl_[1],func$0=_hk_[1];
                   switch$0 = 1}}
               break;
              case 7:
               var _hm_=exp$0[2];
               if(_hm_)
                {var _hn_=_hm_[2];
                 if(_hn_ && ! _hn_[2])
                  {var exp2=_hn_[1],exp1=_hm_[1];
                   if(cont$0)
                    {var _ho_=cont$0[1];
                     if(typeof _ho_ !== "number")
                      switch(_ho_[0])
                       {case 23:
                         var
                          cont1$1=cont$0[2],
                          lbl$2=_ho_[1],
                          match$3=label_code(cont1$1),
                          cont2=match$3[2],
                          lbl2=match$3[1],
                          cont$5=
                           [0,[24,lbl2],comp_expr(env,exp2,sz,[0,[23,lbl$2],cont2])],
                          exp$0=exp1,
                          cont$0=cont$5;
                         continue;
                        case 24:
                         var
                          lbl$3=_ho_[1],
                          cont$6=[0,[24,lbl$3],comp_expr(env,exp2,sz,cont$0)],
                          exp$0=exp1,
                          cont$0=cont$6;
                         continue
                        }}
                   var
                    match$2=label_code(cont$0),
                    cont1$0=match$2[2],
                    lbl$1=match$2[1],
                    cont$4=[0,[26,lbl$1],comp_expr(env,exp2,sz,cont1$0)],
                    exp$0=exp1,
                    cont$0=cont$4;
                   continue}}
               break;
              case 8:
               var _hp_=exp$0[2];
               if(_hp_)
                {var _hq_=_hp_[2];
                 if(_hq_ && ! _hq_[2])
                  {var exp2$0=_hq_[1],exp1$0=_hp_[1];
                   if(cont$0)
                    {var _hr_=cont$0[1];
                     if(typeof _hr_ !== "number")
                      switch(_hr_[0])
                       {case 23:
                         var
                          lbl$5=_hr_[1],
                          cont$8=[0,[23,lbl$5],comp_expr(env,exp2$0,sz,cont$0)],
                          exp$0=exp1$0,
                          cont$0=cont$8;
                         continue;
                        case 24:
                         var
                          cont1$3=cont$0[2],
                          lbl$6=_hr_[1],
                          match$5=label_code(cont1$3),
                          cont2$0=match$5[2],
                          lbl2$0=match$5[1],
                          cont$9=
                           [0,
                            [23,lbl2$0],
                            comp_expr(env,exp2$0,sz,[0,[24,lbl$6],cont2$0])],
                          exp$0=exp1$0,
                          cont$0=cont$9;
                         continue
                        }}
                   var
                    match$4=label_code(cont$0),
                    cont1$2=match$4[2],
                    lbl$4=match$4[1],
                    cont$7=[0,[25,lbl$4],comp_expr(env,exp2$0,sz,cont1$2)],
                    exp$0=exp1$0,
                    cont$0=cont$7;
                   continue}}
               break;
              case 9:
               var _hs_=exp$0[2];
               if(_hs_ && ! _hs_[2])
                {var arg$2=_hs_[1],switch$1=0;
                 if(cont$0)
                  {var _ht_=cont$0[1],switch$2=0;
                   if(typeof _ht_ !== "number")
                    switch(_ht_[0])
                     {case 23:
                       var
                        cont1$4=cont$0[2],
                        lbl$7=_ht_[1],
                        _hu_=[0,[24,lbl$7],cont1$4];
                       switch$2 = 1;
                       break;
                      case 24:
                       var
                        cont1$5=cont$0[2],
                        lbl$8=_ht_[1],
                        _hu_=[0,[23,lbl$8],cont1$5];
                       switch$2 = 1;
                       break
                      }
                   if(switch$2){var cont$10=_hu_;switch$1 = 1}}
                 if(! switch$1)var cont$10=[0,8,cont$0];
                 var exp$0=arg$2,cont$0=cont$10;
                 continue}
               break;
              case 11:
               var _hv_=exp$0[2];
               if(_hv_)
                {var _hw_=_hv_[2];
                 if(_hw_)
                  {var _hx_=_hw_[1];
                   if(1 === _hx_[0])
                    {var _hy_=_hx_[1];
                     if(0 === _hy_[0])
                      {var _hz_=_hy_[1];
                       if(0 === _hz_[0] && ! _hw_[2])
                        {var n=_hz_[1],arg$3=_hv_[1];
                         if(is_immed(n))
                          {var cont$11=[0,[32,n],cont$0],exp$0=arg$3,cont$0=cont$11;
                           continue}}}}}}
               break;
              case 12:
               var _hA_=exp$0[2];
               if(_hA_)
                {var _hB_=_hA_[2];
                 if(_hB_)
                  {var _hC_=_hB_[1];
                   if(1 === _hC_[0])
                    {var _hD_=_hC_[1];
                     if(0 === _hD_[0])
                      {var _hE_=_hD_[1];
                       if(0 === _hE_[0] && ! _hB_[2])
                        {var n$0=_hE_[1],arg$4=_hA_[1];
                         if(is_immed(- n$0 | 0))
                          {var
                            cont$12=[0,[32,- n$0 | 0],cont$0],
                            exp$0=arg$4,
                            cont$0=cont$12;
                           continue}}}}}}
               break;
              case 0:
              case 42:
               var _hf_=exp$0[2];
               if(_hf_ && ! _hf_[2]){var exp$1=_hf_[1],exp$0=exp$1;continue}
               break
              }
           else
            switch(_he_[0])
             {case 2:
               var
                loc$1=exp$0[3],
                args$1=exp$0[2],
                tag=_he_[1],
                cont$13=add_pseudo_event(loc$1,compunit_name[1],cont$0),
                _hF_=[0,[16,caml_call1(Stdlib_list[1],args$1),tag],cont$13];
               if(counter < 50)
                {var counter$6=counter + 1 | 0;
                 return comp_args$0(counter$6,env,args$1,sz,_hF_)}
               return caml_trampoline_return
                       (comp_args$0,[0,env,args$1,sz,_hF_]);
              case 6:
               var
                loc$2=exp$0[3],
                args$2=exp$0[2],
                n$1=_he_[1],
                cont$14=add_pseudo_event(loc$2,compunit_name[1],cont$0),
                _hG_=[0,[20,n$1],cont$14];
               if(counter < 50)
                {var counter$7=counter + 1 | 0;
                 return comp_args$0(counter$7,env,args$2,sz,_hG_)}
               return caml_trampoline_return
                       (comp_args$0,[0,env,args$2,sz,_hG_]);
              case 10:
               var _hH_=exp$0[2];
               if(_hH_ && ! _hH_[2])
                {var
                  arg$5=_hH_[1],
                  k=_he_[1],
                  cont$15=[0,[29,k],discard_dead_code(cont$0)],
                  exp$0=arg$5,
                  cont$0=cont$15;
                 continue}
               break;
              case 13:
               var _hI_=exp$0[2];
               if(_hI_)
                {var _hJ_=_hI_[2];
                 if(_hJ_)
                  {var _hK_=_hJ_[1];
                   if(1 === _hK_[0] && ! _hJ_[2])
                    {var
                      arg$6=_hI_[1],
                      c=_he_[1],
                      p=[13,caml_call1(Lambda[28],c)],
                      args$3=[0,_hK_,[0,arg$6,0]],
                      _hL_=[0,comp_primitive(p,args$3),cont$0];
                     if(counter < 50)
                      {var counter$8=counter + 1 | 0;
                       return comp_args$0(counter$8,env,args$3,sz,_hL_)}
                     return caml_trampoline_return
                             (comp_args$0,[0,env,args$3,sz,_hL_])}}}
               break;
              case 15:
               var _hM_=exp$0[2];
               if(_hM_ && ! _hM_[2])
                {var arg$7=_hM_[1],n$2=_he_[1];
                 if(! is_immed(n$2))
                  {var
                    cont$16=[0,0,[0,[15,[0,[0,n$2]]],[0,12,cont$0]]],
                    exp$0=arg$7,
                    cont$0=cont$16;
                   continue}}
               break;
              case 17:
               var args$4=exp$0[2],cmp=_he_[1];
               switch(cmp)
                {case 0:var cont$17=[0,_an_,cont$0];break;
                 case 1:var cont$17=[0,_ao_,cont$0];break;
                 case 2:var cont$17=[0,_ap_,cont$0];break;
                 case 3:var cont$17=[0,_aq_,[0,8,cont$0]];break;
                 case 4:var cont$17=[0,_ar_,cont$0];break;
                 case 5:var cont$17=[0,_as_,[0,8,cont$0]];break;
                 case 6:var cont$17=[0,_at_,cont$0];break;
                 case 7:var cont$17=[0,_au_,[0,8,cont$0]];break;
                 case 8:var cont$17=[0,_av_,cont$0];break;
                 default:var cont$17=[0,_aw_,[0,8,cont$0]]}
               if(counter < 50)
                {var counter$9=counter + 1 | 0;
                 return comp_args$0(counter$9,env,args$4,sz,cont$17)}
               return caml_trampoline_return
                       (comp_args$0,[0,env,args$4,sz,cont$17]);
              case 18:
               var
                loc$3=exp$0[3],
                args$5=exp$0[2],
                kind=_he_[1],
                cont$18=add_pseudo_event(loc$3,compunit_name[1],cont$0);
               if(kind)
                {if(3 <= kind)
                  {var
                    _hN_=
                     [0,[17,caml_call1(Stdlib_list[1],args$5)],cont$18];
                   if(counter < 50)
                    {var counter$10=counter + 1 | 0;
                     return comp_args$0(counter$10,env,args$5,sz,_hN_)}
                   return caml_trampoline_return
                           (comp_args$0,[0,env,args$5,sz,_hN_])}
                 var
                  _hO_=
                   [0,[16,caml_call1(Stdlib_list[1],args$5),0],cont$18];
                 if(counter < 50)
                  {var counter$11=counter + 1 | 0;
                   return comp_args$0(counter$11,env,args$5,sz,_hO_)}
                 return caml_trampoline_return
                         (comp_args$0,[0,env,args$5,sz,_hO_])}
               if(0 === args$5)return [0,_ax_,cont$18];
               var
                _hP_=
                 [0,[16,caml_call1(Stdlib_list[1],args$5),0],[0,_ay_,cont$18]];
               if(counter < 50)
                {var counter$12=counter + 1 | 0;
                 return comp_args$0(counter$12,env,args$5,sz,_hP_)}
               return caml_trampoline_return
                       (comp_args$0,[0,env,args$5,sz,_hP_]);
              case 19:
               var _hQ_=_he_[1],_hR_=exp$0[2];
               if(_hR_)
                {var _hS_=_hR_[1],switch$3=0,_hT_=_he_[2];
                 if(6 === _hS_[0])
                  {var _hU_=_hS_[1],switch$4=0;
                   if(typeof _hU_ !== "number" && 18 === _hU_[0])
                    {if(! _hR_[2])
                      {var loc$5=exp$0[3],args$6=_hS_[2],kind$0=_hU_[1];
                       if(_hQ_ === kind$0)
                        {var exp$4=[6,[18,_hQ_,_hT_],args$6,loc$5],exp$0=exp$4;
                         continue}
                       throw [0,Assert_failure,_az_]}
                     switch$4 = 1}
                   if(! switch$4)switch$3 = 1}
                 else
                  switch$3 = 1;
                 if(switch$3 && ! _hR_[2])
                  {var
                    loc$4=exp$0[3],
                    prim_obj_dup=caml_call3(Primitive[1],cst_caml_obj_dup,1,1),
                    exp$3=[6,[9,prim_obj_dup],[0,_hS_,0],loc$4],
                    exp$0=exp$3;
                   continue}}
               return caml_call1(Misc[1],cst_Bytegen_comp_expr_Pduparra)
              }
           if(switch$0)
            {var exp$2=[2,[0,func$0,[0,arg$1,0],loc$0,0,3,2]],exp$0=exp$2;
             continue}
           var args$0=exp$0[2],_hg_=[0,comp_primitive(_he_,args$0),cont$0];
           if(counter < 50)
            {var counter$13=counter + 1 | 0;
             return comp_args$0(counter$13,env,args$0,sz,_hg_)}
           return caml_trampoline_return(comp_args$0,[0,env,args$0,sz,_hg_]);
          case 7:
           var
            sw=exp$0[2],
            arg$8=exp$0[1],
            match$6=make_branch(cont$0),
            cont1$6=match$6[2],
            branch=match$6[1],
            c$0=[0,discard_dead_code(cont1$6)],
            store=caml_call1(Storer[1],0),
            act_consts=caml_make_vect(sw[1],0),
            act_blocks=caml_make_vect(sw[3],0),
            _hV_=sw[5];
           if(_hV_){var fail=_hV_[1];caml_call2(store[3],0,fail)}
           var
            _hW_=sw[2],
            _hX_=
             function(store,act_consts)
               {return function(param)
                 {var act=param[2],n=param[1],_iw_=caml_call2(store[3],0,act);
                  caml_check_bound(act_consts,n)[1 + n] = _iw_;
                  return 0}}
              (store,act_consts);
           caml_call2(Stdlib_list[15],_hX_,_hW_);
           var
            _hY_=sw[4],
            _hZ_=
             function(store,act_blocks)
               {return function(param)
                 {var act=param[2],n=param[1],_iv_=caml_call2(store[3],0,act);
                  caml_check_bound(act_blocks,n)[1 + n] = _iv_;
                  return 0}}
              (store,act_blocks);
           caml_call2(Stdlib_list[15],_hZ_,_hY_);
           var
            acts=caml_call1(store[1],0),
            lbls$0=caml_make_vect(acts.length - 1,0),
            _h0_=acts.length - 1 - 1 | 0;
           if(! (_h0_ < 0))
            {var i$1=_h0_;
             for(;;)
              {var
                _h9_=[0,branch,c$0[1]],
                match$7=
                 label_code
                  (comp_expr(env,caml_check_bound(acts,i$1)[1 + i$1],sz,_h9_)),
                c1=match$7[2],
                lbl$9=match$7[1];
               caml_check_bound(lbls$0,i$1)[1 + i$1] = lbl$9;
               c$0[1] = discard_dead_code(c1);
               var _h__=i$1 - 1 | 0;
               if(0 !== i$1){var i$1=_h__;continue}
               break}}
           var lbl_blocks=caml_make_vect(sw[3],0),_h1_=sw[3] - 1 | 0;
           if(! (_h1_ < 0))
            {var i$0=_h1_;
             for(;;)
              {var
                _h6_=caml_check_bound(act_blocks,i$0)[1 + i$0],
                _h7_=caml_check_bound(lbls$0,_h6_)[1 + _h6_];
               caml_check_bound(lbl_blocks,i$0)[1 + i$0] = _h7_;
               var _h8_=i$0 - 1 | 0;
               if(0 !== i$0){var i$0=_h8_;continue}
               break}}
           var lbl_consts=caml_make_vect(sw[1],0),_h2_=sw[1] - 1 | 0;
           if(! (_h2_ < 0))
            {var i=_h2_;
             for(;;)
              {var
                _h3_=caml_check_bound(act_consts,i)[1 + i],
                _h4_=caml_check_bound(lbls$0,_h3_)[1 + _h3_];
               caml_check_bound(lbl_consts,i)[1 + i] = _h4_;
               var _h5_=i - 1 | 0;
               if(0 !== i){var i=_h5_;continue}
               break}}
           var
            cont$19=[0,[27,lbl_consts,lbl_blocks],c$0[1]],
            exp$0=arg$8,
            cont$0=cont$19;
           continue;
          case 8:
           var
            loc$6=exp$0[4],
            d=exp$0[3],
            sw$0=exp$0[2],
            arg$9=exp$0[1],
            exp$5=caml_call4(Matching[8],loc$6,arg$9,sw$0,d),
            exp$0=exp$5;
           continue;
          case 9:
           var
            args$7=exp$0[2],
            i$2=exp$0[1],
            cont$20=discard_dead_code(cont$0),
            match$8=find_raise_label(i$2),
            tb=match$8[3],
            size=match$8[2],
            label=match$8[1],
            cont$21=branch_to(label,cont$20),
            loop$0=
             function(tb,size,cont)
              {function loop(sz,tbb)
                {if(tb === tbb)return add_pop(sz - size | 0,cont);
                 if(tbb)
                  {var tbb$0=tbb[2],try_sz=tbb[1];
                   return add_pop
                           ((sz - try_sz | 0) - 4 | 0,[0,9,loop(try_sz,tbb$0)])}
                 throw [0,Assert_failure,_aA_]}
               return loop},
            loop=loop$0(tb,size,cont$21),
            cont$22=loop(sz,try_blocks[1]);
           if(args$7 && ! args$7[2])
            {var exp$6=args$7[1],exp$0=exp$6,cont$0=cont$22;continue}
           if(counter < 50)
            {var counter$1=counter + 1 | 0;
             return comp_exit_args(counter$1,env,args$7,sz,size,cont$22)}
           return caml_trampoline_return
                   (comp_exit_args,[0,env,args$7,sz,size,cont$22]);
          case 10:
           var
            handler=exp$0[3],
            match$9=exp$0[2],
            vars=match$9[2],
            i$3=match$9[1],
            body$2=exp$0[1],
            _h$_=function(_iu_){return _iu_[1]},
            vars$0=caml_call2(Stdlib_list[17],_h$_,vars),
            nvars=caml_call1(Stdlib_list[1],vars$0),
            match$10=make_branch(cont$0),
            cont1$7=match$10[2],
            branch1=match$10[1];
           if(1 === nvars)
            {var switch$5=0;
             if(vars$0 && ! vars$0[2])
              {var
                var$0=vars$0[1],
                _ia_=add_pop(1,cont1$7),
                match$11=
                 label_code
                  ([0,
                    0,
                    comp_expr
                     (add_var(var$0,sz + 1 | 0,env),handler,sz + 1 | 0,_ia_)]),
                cont2$1=match$11[2],
                lbl_handler=match$11[1];
               push_static_raise(i$3,lbl_handler,sz);
               var r=comp_expr(env,body$2,sz,[0,branch1,cont2$1]);
               switch$5 = 1}
             if(! switch$5)throw [0,Assert_failure,_aB_]}
           else
            {var
              _ib_=add_pop(nvars,cont1$7),
              match$12=
               label_code
                (comp_expr
                  (add_vars(vars$0,sz + 1 | 0,env),
                   handler,
                   sz + nvars | 0,
                   _ib_)),
              cont2$2=match$12[2],
              lbl_handler$0=match$12[1];
             push_static_raise(i$3,lbl_handler$0,sz + nvars | 0);
             var
              r=
               push_dummies
                (nvars,
                 comp_expr
                  (env,
                   body$2,
                   sz + nvars | 0,
                   add_pop(nvars,[0,branch1,cont2$2])))}
           sz_static_raises[1]
           =
           caml_call1(Stdlib_list[6],sz_static_raises[1]);
           return r;
          case 11:
           var
            handler$0=exp$0[3],
            id$1=exp$0[2],
            body$3=exp$0[1],
            match$13=make_branch(cont$0),
            cont1$8=match$13[2],
            branch1$0=match$13[1],
            lbl_handler$1=new_label(0),
            _ic_=add_pop(1,cont1$8),
            body_cont=
             [0,
              9,
              [0,
               branch1$0,
               [0,
                [0,lbl_handler$1],
                [0,
                 0,
                 comp_expr
                  (add_var(id$1,sz + 1 | 0,env),handler$0,sz + 1 | 0,_ic_)]]]];
           try_blocks[1] = [0,sz,try_blocks[1]];
           var l=comp_expr(env,body$3,sz + 4 | 0,body_cont);
           try_blocks[1] = caml_call1(Stdlib_list[6],try_blocks[1]);
           return [0,[28,lbl_handler$1],l];
          case 12:
           var ifnot=exp$0[3],ifso=exp$0[2],cond=exp$0[1];
           if(counter < 50)
            {var counter$0=counter + 1 | 0;
             return comp_binary_test(counter$0,env,cond,ifso,ifnot,sz,cont$0)}
           return caml_trampoline_return
                   (comp_binary_test,[0,env,cond,ifso,ifnot,sz,cont$0]);
          case 13:
           var
            exp2$1=exp$0[2],
            exp1$1=exp$0[1],
            cont$23=comp_expr(env,exp2$1,sz,cont$0),
            exp$0=exp1$1,
            cont$0=cont$23;
           continue;
          case 14:
           var
            body$4=exp$0[2],
            cond$0=exp$0[1],
            lbl_loop=new_label(0),
            lbl_test=new_label(0);
           return [0,
                   [22,lbl_test],
                   [0,
                    [0,lbl_loop],
                    [0,
                     10,
                     comp_expr
                      (env,
                       body$4,
                       sz,
                       [0,
                        [0,lbl_test],
                        comp_expr
                         (env,cond$0,sz,[0,[23,lbl_loop],add_const_unit(cont$0)])])]]];
          case 15:
           var
            body$5=exp$0[5],
            dir=exp$0[4],
            stop=exp$0[3],
            start=exp$0[2],
            param=exp$0[1],
            lbl_loop$0=new_label(0),
            lbl_exit=new_label(0),
            offset=dir?-1:1,
            comp=dir?2:3,
            _id_=
             [0,
              _aF_,
              [0,
               0,
               [0,
                [32,offset],
                [0,
                 _aE_,
                 [0,
                  _aD_,
                  [0,
                   _aC_,
                   [0,
                    [23,lbl_loop$0],
                    [0,[0,lbl_exit],add_const_unit(add_pop(2,cont$0))]]]]]]]],
            cont$24=
             [0,
              0,
              comp_expr
               (env,
                stop,
                sz + 1 | 0,
                [0,
                 0,
                 [0,
                  0,
                  [0,
                   _aG_,
                   [0,
                    [31,comp],
                    [0,
                     [23,lbl_exit],
                     [0,
                      [0,lbl_loop$0],
                      [0,
                       10,
                       comp_expr
                        (add_var(param,sz + 1 | 0,env),body$5,sz + 2 | 0,_id_)]]]]]]])],
            exp$0=start,
            cont$0=cont$24;
           continue;
          case 16:
           var expr=exp$0[2],id$2=exp$0[1];
           try
            {var
              pos$1=caml_call2(Ident[29],id$2,env[1]),
              _ie_=comp_expr(env,expr,sz,[0,[4,sz - pos$1 | 0],cont$0]);
             return _ie_}
           catch(_it_)
            {_it_ = caml_wrap_exception(_it_);
             if(_it_ === Stdlib[8])
              return caml_call1(Misc[1],cst_Bytegen_comp_expr_assign);
             throw _it_}
          case 17:
           var
            args$8=exp$0[4],
            obj=exp$0[3],
            met=exp$0[2],
            kind$1=exp$0[1],
            args$9=2 === kind$1?caml_call1(Stdlib_list[6],args$8):args$8,
            nargs$0=caml_call1(Stdlib_list[1],args$9) + 1 | 0;
           if(0 === kind$1)
            var args$10=[0,met,[0,obj,args$9]],getmethod=25;
           else
            {var switch$6=0;
             if(1 === met[0])
              {var _ih_=met[1];
               if(0 === _ih_[0])
                {var _ii_=_ih_[1];
                 if(0 === _ii_[0])
                  {var n$3=_ii_[1],args$10=[0,obj,args$9],getmethod=[34,n$3];
                   switch$6 = 1}}}
             if(! switch$6)
              var args$11=[0,met,[0,obj,args$9]],args$10=args$11,getmethod=26}
           if(is_tailcall(cont$0))
            {var
              _if_=
               [0,
                getmethod,
                [0,[7,nargs$0,sz + nargs$0 | 0],discard_dead_code(cont$0)]];
             if(counter < 50)
              {var counter$14=counter + 1 | 0;
               return comp_args$0(counter$14,env,args$10,sz,_if_)}
             return caml_trampoline_return
                     (comp_args$0,[0,env,args$10,sz,_if_])}
           if(4 <= nargs$0)
            {var
              match$14=label_code(cont$0),
              cont1$9=match$14[2],
              lbl$10=match$14[1];
             return [0,
                     [5,lbl$10],
                     comp_args
                      (env,
                       args$10,
                       sz + 3 | 0,
                       [0,getmethod,[0,[6,nargs$0],cont1$9]])]}
           var _ig_=[0,getmethod,[0,[6,nargs$0],cont$0]];
           if(counter < 50)
            {var counter$15=counter + 1 | 0;
             return comp_args$0(counter$15,env,args$10,sz,_ig_)}
           return caml_trampoline_return(comp_args$0,[0,env,args$10,sz,_ig_]);
          case 18:
           var lev=exp$0[2],lam=exp$0[1],_ij_=lev[1];
           if(_ij_)
            var scopes=_ij_[2],ev_defname=caml_call1(Debuginfo[1][2],scopes);
           else
            var ev_defname=cst$0;
           var
            event$0=
             function(lev,ev_defname)
              {function event(kind,info)
                {var _il_=lev[3];
                 if(_il_)
                  {var _im_=_il_[1];
                   if(1 === _im_[1])
                    var _in_=1 === lev[2]?[1,_im_]:[0,_im_];
                   else
                    var _is_=1 === lev[2]?[0,_im_]:[1,_im_],_in_=_is_;
                   var _io_=_in_}
                 else
                  var _io_=0;
                 var
                  _ip_=Subst[1],
                  _iq_=caml_call1(Env[113],lev[4]),
                  _ir_=caml_call1(Debuginfo[1][9],lev[1]);
                 return [0,
                         0,
                         compunit_name[1],
                         _ir_,
                         kind,
                         ev_defname,
                         info,
                         _iq_,
                         _ip_,
                         env,
                         sz,
                         _io_]}
               return event},
            event=event$0(lev,ev_defname),
            _ik_=lev[2];
           if(typeof _ik_ === "number")
            switch(_ik_)
             {case 0:
               var c$1=comp_expr(env,lam,sz,cont$0),ev=event(0,1);
               return add_event(ev,c$1);
              case 1:
               var c$2=comp_expr(env,lam,sz,cont$0),ev$0=event(1,0);
               return add_event(ev$0,c$2);
              default:
               var c$3=comp_expr(env,lam,sz,cont$0),ev$1=event(1,1);
               return add_event(ev$1,c$3)}
           else
            {if(0 === _ik_[0])
              {var ty=_ik_[1];
               if(6 === lam[0])
                var
                 prim=lam[1],
                 preserve_tailcall=preserve_tailcall_for_prim(prim);
               else
                var preserve_tailcall=1;
               if(preserve_tailcall && is_tailcall(cont$0))
                {var exp$0=lam;continue}
               switch(lam[0])
                {case 2:
                  var
                   match$15=lam[1],
                   args$12=match$15[2],
                   info=[0,caml_call1(Stdlib_list[1],args$12)];
                  break;
                 case 6:
                  var
                   args$13=lam[2],
                   info=[0,caml_call1(Stdlib_list[1],args$13)];
                  break;
                 case 17:
                  var
                   args$14=lam[4],
                   info=[0,caml_call1(Stdlib_list[1],args$14) + 1 | 0];
                  break;
                 default:var info=1}
               var
                ev$2=event([0,ty],info),
                cont$25=add_event(ev$2,cont$0),
                exp$0=lam,
                cont$0=cont$25;
               continue}
             var exp$0=lam;
             continue}
          default:var exp$7=exp$0[2],exp$0=exp$7;continue}}}
    function comp_args$0(counter,env,argl,sz,cont)
     {var _gQ_=caml_call1(Stdlib_list[9],argl);
      if(counter < 50)
       {var counter$0=counter + 1 | 0;
        return comp_expr_list$0(counter$0,env,_gQ_,sz,cont)}
      return caml_trampoline_return(comp_expr_list$0,[0,env,_gQ_,sz,cont])}
    function comp_expr_list$0(counter,env,exprl,sz,cont)
     {if(exprl)
       {var _gO_=exprl[1];
        if(exprl[2])
         {var rem=exprl[2],_gP_=[0,0,comp_expr_list(env,rem,sz + 1 | 0,cont)];
          if(counter < 50)
           {var counter$0=counter + 1 | 0;
            return comp_expr$0(counter$0,env,_gO_,sz,_gP_)}
          return caml_trampoline_return(comp_expr$0,[0,env,_gO_,sz,_gP_])}
        if(counter < 50)
         {var counter$1=counter + 1 | 0;
          return comp_expr$0(counter$1,env,_gO_,sz,cont)}
        return caml_trampoline_return(comp_expr$0,[0,env,_gO_,sz,cont])}
      return cont}
    function comp_exit_args(counter,env,argl,sz,pos,cont)
     {var _gN_=caml_call1(Stdlib_list[9],argl);
      if(counter < 50)
       {var counter$0=counter + 1 | 0;
        return comp_expr_list_assign$0(counter$0,env,_gN_,sz,pos,cont)}
      return caml_trampoline_return
              (comp_expr_list_assign$0,[0,env,_gN_,sz,pos,cont])}
    function comp_expr_list_assign$0(counter,env,exprl,sz,pos,cont)
     {if(exprl)
       {var
         rem=exprl[2],
         exp=exprl[1],
         _gM_=
          [0,
           [4,sz - pos | 0],
           comp_expr_list_assign(env,rem,sz,pos - 1 | 0,cont)];
        if(counter < 50)
         {var counter$0=counter + 1 | 0;
          return comp_expr$0(counter$0,env,exp,sz,_gM_)}
        return caml_trampoline_return(comp_expr$0,[0,env,exp,sz,_gM_])}
      return cont}
    function comp_binary_test(counter,env,cond,ifso,ifnot,sz,cont)
     {if(caml_equal(ifnot,[1,Lambda[8]]))
       var
        match=label_code(cont),
        cont1=match[2],
        lbl_end=match[1],
        cont_cond=[0,[26,lbl_end],comp_expr(env,ifso,sz,cont1)];
      else
       {var match$0=code_as_jump(ifso,sz);
        if(match$0)
         var
          label=match$0[1],
          cont$0=comp_expr(env,ifnot,sz,cont),
          _gK_=[0,[23,label],cont$0];
        else
         {var match$1=code_as_jump(ifnot,sz);
          if(match$1)
           var
            label$0=match$1[1],
            cont$1=comp_expr(env,ifso,sz,cont),
            _gL_=[0,[24,label$0],cont$1];
          else
           var
            match$2=make_branch(cont),
            cont1$0=match$2[2],
            branch_end=match$2[1],
            match$3=label_code(comp_expr(env,ifnot,sz,cont1$0)),
            cont2=match$3[2],
            lbl_not=match$3[1],
            _gL_=[0,[24,lbl_not],comp_expr(env,ifso,sz,[0,branch_end,cont2])];
          var _gK_=_gL_}
        var cont_cond=_gK_}
      if(counter < 50)
       {var counter$0=counter + 1 | 0;
        return comp_expr$0(counter$0,env,cond,sz,cont_cond)}
      return caml_trampoline_return(comp_expr$0,[0,env,cond,sz,cont_cond])}
    function comp_expr(env,exp,sz,cont)
     {return caml_trampoline(comp_expr$0(0,env,exp,sz,cont))}
    function comp_args(env,argl,sz,cont)
     {return caml_trampoline(comp_args$0(0,env,argl,sz,cont))}
    function comp_expr_list(env,exprl,sz,cont)
     {return caml_trampoline(comp_expr_list$0(0,env,exprl,sz,cont))}
    function comp_expr_list_assign(env,exprl,sz,pos,cont)
     {return caml_trampoline(comp_expr_list_assign$0(0,env,exprl,sz,pos,cont))}
    function comp_block(env,exp,sz,cont)
     {max_stack_used[1] = 0;
      var
       code=comp_expr(env,exp,sz,cont),
       used_safe=max_stack_used[1] + Config[35] | 0;
      return Config[34] < used_safe
              ?[0,[15,[0,[0,used_safe]]],[0,_aH_,code]]
              :code}
    function comp_function(tc,cont)
     {var arity=caml_call1(Stdlib_list[1],tc[1]);
      function positions(pos,delta,param)
       {if(param)
         {var
           rem=param[2],
           id=param[1],
           _gJ_=positions(pos + delta | 0,delta,rem);
          return caml_call3(Ident[28],id,pos,_gJ_)}
        return Ident[27]}
      var
       _gH_=positions(-2 * tc[7] | 0,2,tc[6]),
       _gI_=positions((2 * (tc[5] - tc[7] | 0) | 0) - 1 | 0,1,tc[4]),
       env=[0,positions(arity,-1,tc[1]),_gI_,_gH_],
       cont$0=comp_block(env,tc[2],arity,[0,[8,arity],cont]);
      return 1 < arity
              ?[0,1,[0,[0,tc[3]],[0,[9,arity - 1 | 0],cont$0]]]
              :[0,[0,tc[3]],cont$0]}
    function comp_remainder(cont)
     {var c=[0,cont];
      try
       {for(;;)
         {var _gF_=c[1];
          c[1]
          =
          comp_function(caml_call1(Stdlib_stack[4],functions_to_compile),_gF_);
          continue}}
      catch(_gG_)
       {_gG_ = caml_wrap_exception(_gG_);
        if(_gG_ === Stdlib_stack[1])return c[1];
        throw _gG_}}
    function compile_implementation(modulename,expr)
     {caml_call1(Stdlib_stack[8],functions_to_compile);
      label_counter[1] = 0;
      sz_static_raises[1] = 0;
      compunit_name[1] = modulename;
      var init_code=comp_block(empty_env,expr,0,0);
      if(0 < caml_call1(Stdlib_stack[11],functions_to_compile))
       {var lbl_init=new_label(0);
        return [0,[22,lbl_init],comp_remainder([0,[0,lbl_init],init_code])]}
      return init_code}
    function compile_phrase(expr)
     {caml_call1(Stdlib_stack[8],functions_to_compile);
      label_counter[1] = 0;
      sz_static_raises[1] = 0;
      var
       init_code=comp_block(empty_env,expr,1,_aI_),
       fun_code=comp_remainder(0);
      return [0,init_code,fun_code]}
    function reset(param)
     {label_counter[1] = 0;
      sz_static_raises[1] = 0;
      compunit_name[1] = cst$1;
      caml_call1(Stdlib_stack[8],functions_to_compile);
      max_stack_used[1] = 0;
      return 0}
    var Bytegen=[0,compile_implementation,compile_phrase,reset,merge_events];
    caml_register_global(333,Bytegen,"Bytegen");
    function instruction(ppf,param)
     {if(typeof param === "number")
       switch(param)
        {case 0:return caml_call2(Stdlib_format[125],ppf,_aJ_);
         case 1:return caml_call2(Stdlib_format[125],ppf,_aK_);
         case 2:return caml_call2(Stdlib_format[125],ppf,_aL_);
         case 3:return caml_call2(Stdlib_format[125],ppf,_aM_);
         case 4:return caml_call2(Stdlib_format[125],ppf,_aN_);
         case 5:return caml_call2(Stdlib_format[125],ppf,_aO_);
         case 6:return caml_call2(Stdlib_format[125],ppf,_aP_);
         case 7:return caml_call2(Stdlib_format[125],ppf,_aQ_);
         case 8:return caml_call2(Stdlib_format[125],ppf,_aR_);
         case 9:return caml_call2(Stdlib_format[125],ppf,_aS_);
         case 10:return caml_call2(Stdlib_format[125],ppf,_aT_);
         case 11:return caml_call2(Stdlib_format[125],ppf,_aU_);
         case 12:return caml_call2(Stdlib_format[125],ppf,_aV_);
         case 13:return caml_call2(Stdlib_format[125],ppf,_aW_);
         case 14:return caml_call2(Stdlib_format[125],ppf,_aX_);
         case 15:return caml_call2(Stdlib_format[125],ppf,_aY_);
         case 16:return caml_call2(Stdlib_format[125],ppf,_aZ_);
         case 17:return caml_call2(Stdlib_format[125],ppf,_a0_);
         case 18:return caml_call2(Stdlib_format[125],ppf,_a1_);
         case 19:return caml_call2(Stdlib_format[125],ppf,_a2_);
         case 20:return caml_call2(Stdlib_format[125],ppf,_a3_);
         case 21:return caml_call2(Stdlib_format[125],ppf,_a4_);
         case 22:return caml_call2(Stdlib_format[125],ppf,_a5_);
         case 23:return caml_call2(Stdlib_format[125],ppf,_a6_);
         case 24:return caml_call2(Stdlib_format[125],ppf,_a7_);
         case 25:return caml_call2(Stdlib_format[125],ppf,_a8_);
         case 26:return caml_call2(Stdlib_format[125],ppf,_a9_);
         default:return caml_call2(Stdlib_format[125],ppf,_a__)}
      else
       switch(param[0])
        {case 0:
          var lbl=param[1];return caml_call3(Stdlib_format[125],ppf,_a$_,lbl);
         case 1:
          var n=param[1];return caml_call3(Stdlib_format[125],ppf,_ba_,n);
         case 2:
          var n$0=param[1];return caml_call3(Stdlib_format[125],ppf,_bb_,n$0);
         case 3:
          var n$1=param[1];return caml_call3(Stdlib_format[125],ppf,_bc_,n$1);
         case 4:
          var n$2=param[1];return caml_call3(Stdlib_format[125],ppf,_bd_,n$2);
         case 5:
          var lbl$0=param[1];
          return caml_call3(Stdlib_format[125],ppf,_be_,lbl$0);
         case 6:
          var n$3=param[1];return caml_call3(Stdlib_format[125],ppf,_bf_,n$3);
         case 7:
          var m=param[2],n$4=param[1];
          return caml_call4(Stdlib_format[125],ppf,_bg_,n$4,m);
         case 8:
          var n$5=param[1];return caml_call3(Stdlib_format[125],ppf,_bh_,n$5);
         case 9:
          var n$6=param[1];return caml_call3(Stdlib_format[125],ppf,_bi_,n$6);
         case 10:
          var n$7=param[2],lbl$1=param[1];
          return caml_call4(Stdlib_format[125],ppf,_bj_,lbl$1,n$7);
         case 11:
          var n$8=param[2],lbls=param[1];
          caml_call2(Stdlib_format[125],ppf,_bk_);
          var
           _gC_=
            function(lbl){return caml_call3(Stdlib_format[125],ppf,_bl_,lbl)};
          caml_call2(Stdlib_list[15],_gC_,lbls);
          return caml_call3(Stdlib_format[125],ppf,_bm_,n$8);
         case 12:
          var n$9=param[1];return caml_call3(Stdlib_format[125],ppf,_bn_,n$9);
         case 13:
          var id=param[1];
          return caml_call4(Stdlib_format[125],ppf,_bo_,Ident[5],id);
         case 14:
          var id$0=param[1];
          return caml_call4(Stdlib_format[125],ppf,_bp_,Ident[5],id$0);
         case 15:
          var cst=param[1];
          return caml_call4(Stdlib_format[125],ppf,_bq_,Printlambda[3],cst);
         case 16:
          var m$0=param[2],n$10=param[1];
          return caml_call4(Stdlib_format[125],ppf,_br_,n$10,m$0);
         case 17:
          var n$11=param[1];
          return caml_call3(Stdlib_format[125],ppf,_bs_,n$11);
         case 18:
          var n$12=param[1];
          return caml_call3(Stdlib_format[125],ppf,_bt_,n$12);
         case 19:
          var n$13=param[1];
          return caml_call3(Stdlib_format[125],ppf,_bu_,n$13);
         case 20:
          var n$14=param[1];
          return caml_call3(Stdlib_format[125],ppf,_bv_,n$14);
         case 21:
          var n$15=param[1];
          return caml_call3(Stdlib_format[125],ppf,_bw_,n$15);
         case 22:
          var lbl$2=param[1];
          return caml_call3(Stdlib_format[125],ppf,_bx_,lbl$2);
         case 23:
          var lbl$3=param[1];
          return caml_call3(Stdlib_format[125],ppf,_by_,lbl$3);
         case 24:
          var lbl$4=param[1];
          return caml_call3(Stdlib_format[125],ppf,_bz_,lbl$4);
         case 25:
          var lbl$5=param[1];
          return caml_call3(Stdlib_format[125],ppf,_bA_,lbl$5);
         case 26:
          var lbl$6=param[1];
          return caml_call3(Stdlib_format[125],ppf,_bB_,lbl$6);
         case 27:
          var
           blocks=param[2],
           consts=param[1],
           labels=
            function(ppf,labs)
             {function _gE_(lbl)
               {return caml_call3(Stdlib_format[125],ppf,_bC_,lbl)}
              return caml_call2(Stdlib_array[13],_gE_,labs)};
          return caml_call6
                  (Stdlib_format[125],ppf,_bD_,labels,consts,labels,blocks);
         case 28:
          var lbl$7=param[1];
          return caml_call3(Stdlib_format[125],ppf,_bE_,lbl$7);
         case 29:
          var k=param[1],_gD_=caml_call1(Lambda[38],k);
          return caml_call3(Stdlib_format[125],ppf,_bF_,_gD_);
         case 30:
          var n$16=param[2],s=param[1];
          return caml_call4(Stdlib_format[125],ppf,_bG_,s,n$16);
         case 31:
          switch(param[1])
           {case 0:return caml_call2(Stdlib_format[125],ppf,_bH_);
            case 1:return caml_call2(Stdlib_format[125],ppf,_bI_);
            case 2:return caml_call2(Stdlib_format[125],ppf,_bJ_);
            case 3:return caml_call2(Stdlib_format[125],ppf,_bK_);
            case 4:return caml_call2(Stdlib_format[125],ppf,_bL_);
            default:return caml_call2(Stdlib_format[125],ppf,_bM_)}
         case 32:
          var n$17=param[1];
          return caml_call3(Stdlib_format[125],ppf,_bN_,n$17);
         case 33:
          var n$18=param[1];
          return caml_call3(Stdlib_format[125],ppf,_bO_,n$18);
         case 34:
          var n$19=param[1];
          return caml_call3(Stdlib_format[125],ppf,_bP_,n$19);
         default:
          var ev=param[1];
          return caml_call5
                  (Stdlib_format[125],
                   ppf,
                   _bQ_,
                   ev[3][1][1],
                   ev[3][1][4],
                   ev[3][2][4])}}
    function instruction_list(ppf,param)
     {if(param)
       {var _gB_=param[1];
        if(typeof _gB_ !== "number" && 0 === _gB_[0])
         {var il$0=param[2],lbl=_gB_[1];
          return caml_call5
                  (Stdlib_format[125],ppf,_bS_,lbl,instruction_list,il$0)}
        var il=param[2];
        return caml_call6
                (Stdlib_format[125],
                 ppf,
                 _bR_,
                 instruction,
                 _gB_,
                 instruction_list,
                 il)}
      return 0}
    function instrlist(ppf,il)
     {return caml_call4(Stdlib_format[125],ppf,_bT_,instruction_list,il)}
    var Printinstr=[0,instruction,instrlist];
    caml_register_global(337,Printinstr,"Printinstr");
    var Error=[248,cst_Emitcode_Error,caml_fresh_oo_id(0)];
    function marshal_to_channel_with_possib(filename,kind,outchan,obj)
     {try
       {var
         _gy_=Clflags[24][1]?_bU_:0,
         _gz_=caml_call3(Stdlib_marshal[1],outchan,obj,_gy_);
        return _gz_}
      catch(_gA_)
       {_gA_ = caml_wrap_exception(_gA_);
        if(_gA_[1] === Stdlib[7])throw [0,Error,[0,[0,filename,kind]]];
        throw _gA_}}
    function report_error(ppf,param)
     {var kind=param[2],file=param[1];
      return caml_call4(Stdlib_format[125],ppf,_bV_,kind,file)}
    function _bW_(param)
     {if(param[1] === Error)
       {var match=param[2],info=match[1];
        return [0,caml_call2(Location[48],report_error,info)]}
      return 0}
    caml_call1(Location[49],_bW_);
    var out_buffer=[0,caml_call1(Misc[45][1],1024)],out_position=[0,0];
    function out_word(b1,b2,b3,b4)
     {var p=out_position[1];
      if(caml_call1(Misc[45][2],out_buffer[1]) <= p)
       {var
         len=caml_call1(Misc[45][2],out_buffer[1]),
         new_buffer=caml_call1(Misc[45][1],2 * len | 0);
        caml_call5(Misc[45][5],out_buffer[1],0,new_buffer,0,len);
        out_buffer[1] = new_buffer}
      caml_call3(Misc[45][4],out_buffer[1],p,b1);
      caml_call3(Misc[45][4],out_buffer[1],p + 1 | 0,b2);
      caml_call3(Misc[45][4],out_buffer[1],p + 2 | 0,b3);
      caml_call3(Misc[45][4],out_buffer[1],p + 3 | 0,b4);
      out_position[1] = p + 4 | 0;
      return 0}
    function out(opcode){return out_word(opcode,0,0,0)}
    var AsInt=[248,cst_Emitcode_AsInt,caml_fresh_oo_id(0)];
    function const_as_int(param)
     {switch(param[0])
       {case 0:
         var _gx_=param[1];
         switch(_gx_[0])
          {case 0:var i=_gx_[1];return i;case 1:var c=_gx_[1];return c}
         break;
        case 1:var i$0=param[1];return i$0
        }
      throw AsInt}
    function is_immed$0(i)
     {var _gv_=-1073741824 <= i?1:0,_gw_=_gv_?i <= 1073741823?1:0:_gv_;
      return _gw_}
    function is_immed_const(k)
     {try
       {var _gt_=is_immed$0(const_as_int(k));return _gt_}
      catch(_gu_)
       {_gu_ = caml_wrap_exception(_gu_);
        if(_gu_ === AsInt)return 0;
        throw _gu_}}
    function out_int(n){return out_word(n,n >> 8,n >> 16,n >> 24)}
    function out_const(c)
     {try
       {var _gr_=out_int(const_as_int(c));return _gr_}
      catch(_gs_)
       {_gs_ = caml_wrap_exception(_gs_);
        if(_gs_ === AsInt)
         return caml_call1(Misc[1],cst_Emitcode_const_as_int);
        throw _gs_}}
    var label_table=[0,[0]];
    function extend_label_table(needed)
     {var new_size=[0,label_table[1].length - 1];
      for(;;)
       {if(new_size[1] <= needed){new_size[1] = 2 * new_size[1] | 0;continue}
        var new_table=caml_make_vect(new_size[1],_bX_);
        caml_call5
         (Stdlib_array[10],
          label_table[1],
          0,
          new_table,
          0,
          label_table[1].length - 1);
        label_table[1] = new_table;
        return 0}}
    function backpatch(param)
     {var orig=param[2],pos=param[1],displ=(out_position[1] - orig | 0) >> 2;
      caml_call3(Misc[45][4],out_buffer[1],pos,displ);
      caml_call3(Misc[45][4],out_buffer[1],pos + 1 | 0,displ >> 8);
      caml_call3(Misc[45][4],out_buffer[1],pos + 2 | 0,displ >> 16);
      return caml_call3(Misc[45][4],out_buffer[1],pos + 3 | 0,displ >> 24)}
    function out_label_with_orig(orig,lbl)
     {if(label_table[1].length - 1 <= lbl)extend_label_table(lbl);
      var match=caml_check_bound(label_table[1],lbl)[1 + lbl];
      if(0 === match[0])
       {var def=match[1];return out_int((def - orig | 0) >> 2)}
      var patchlist=match[1],_gq_=[1,[0,[0,out_position[1],orig],patchlist]];
      caml_check_bound(label_table[1],lbl)[1 + lbl] = _gq_;
      return out_int(0)}
    function out_label(l){return out_label_with_orig(out_position[1],l)}
    var reloc_info=[0,0];
    function enter(info)
     {reloc_info[1] = [0,[0,info,out_position[1]],reloc_info[1]];return 0}
    function slot_for_literal(sc){enter([0,sc]);return out_int(0)}
    function slot_for_getglobal(id){enter([1,id]);return out_int(0)}
    function slot_for_c_prim(name){enter([3,name]);return out_int(0)}
    var events=[0,0],debug_dirs=[0,Misc[12][4][39][1]];
    function init(param)
     {out_position[1] = 0;
      label_table[1] = caml_make_vect(16,_bY_);
      reloc_info[1] = 0;
      debug_dirs[1] = Misc[12][4][39][1];
      events[1] = 0;
      return 0}
    function emit_branch_comp(param)
     {switch(param)
       {case 0:return out(Opcodes[132]);
        case 1:return out(Opcodes[133]);
        case 2:return out(Opcodes[134]);
        case 3:return out(Opcodes[136]);
        case 4:return out(Opcodes[135]);
        default:return out(Opcodes[137])}}
    function remerge_events(ev1,c)
     {if(c)
       {var _gp_=c[1];
        if(typeof _gp_ !== "number" && 35 === _gp_[0])
         {var c$0=c[2],ev2=_gp_[1];return [0,[35,merge_events(ev1,ev2)],c$0]}}
      return [0,[35,ev1],c]}
    function emit(param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var _fY_=param$0[1];
          if(typeof _fY_ === "number")
           {if(0 === _fY_)
             {var _fZ_=param$0[2];
              if(_fZ_)
               {var _f0_=_fZ_[1],switch$0=0;
                if(typeof _f0_ === "number")
                 switch$0 = 1;
                else
                 switch(_f0_[0])
                  {case 1:
                    var _f1_=_f0_[1];
                    if(0 === _f1_)
                     {var _f2_=_fZ_[2];
                      if(_f2_)
                       {var _f3_=_f2_[1];
                        if(typeof _f3_ !== "number" && 8 === _f3_[0])
                         {var
                           c$3=_f2_[2],
                           m=_f3_[1],
                           param$1=[0,[8,m - 1 | 0],c$3],
                           param$0=param$1;
                          continue}}}
                    var c$2=_fZ_[2];
                    if(8 <= _f1_)
                     {out(Opcodes[19]);out_int(_f1_)}
                    else
                     out(Opcodes[11] + _f1_ | 0);
                    var param$0=c$2;
                    continue;
                   case 2:
                    var c$4=_fZ_[2],n$18=_f0_[1],switch$1=0;
                    if(1 <= n$18 && ! (4 <= n$18))
                     {out((Opcodes[27] + n$18 | 0) - 1 | 0);switch$1 = 1}
                    if(! switch$1){out(Opcodes[31]);out_int(n$18)}
                    var param$0=c$4;
                    continue;
                   case 12:
                    var c$5=_fZ_[2],ofs$0=_f0_[1],switch$2=0;
                    if(-2 !== ofs$0 && 0 !== ofs$0 && 2 !== ofs$0)
                     {out(Opcodes[53]);out_int(ofs$0);switch$2 = 1}
                    if(! switch$2)out(Opcodes[51] + (ofs$0 / 2 | 0) | 0);
                    var param$0=c$5;
                    continue;
                   case 13:
                    var _f4_=_f0_[1],_f5_=_fZ_[2];
                    if(_f5_)
                     {var _f6_=_f5_[1];
                      if(typeof _f6_ !== "number" && 18 === _f6_[0])
                       {var c$7=_f5_[2],n$19=_f6_[1];
                        out(Opcodes[57]);
                        slot_for_getglobal(_f4_);
                        out_int(n$19);
                        var param$0=c$7;
                        continue}}
                    var c$6=_fZ_[2];
                    out(Opcodes[55]);
                    slot_for_getglobal(_f4_);
                    var param$0=c$6;
                    continue;
                   case 15:
                    var _f7_=_f0_[1],_f8_=_fZ_[2];
                    if(_f8_)
                     {var _f9_=_f8_[1],switch$3=0;
                      if(typeof _f9_ === "number")
                       if(24 === _f9_)
                        {var _f$_=_f8_[2];
                         if(_f$_)
                          {var _ga_=_f$_[1],switch$4=0;
                           if(typeof _ga_ !== "number")
                            switch(_ga_[0])
                             {case 23:
                               var rem=_f$_[2],lbl$8=_ga_[1];
                               if(is_immed_const(_f7_))
                                {out(Opcodes[140]);
                                 out_const(_f7_);
                                 out_label(lbl$8);
                                 var param$0=rem;
                                 continue}
                               switch$4 = 1;
                               break;
                              case 24:
                               var rem$0=_f$_[2],lbl$9=_ga_[1];
                               if(is_immed_const(_f7_))
                                {out(Opcodes[141]);
                                 out_const(_f7_);
                                 out_label(lbl$9);
                                 var param$0=rem$0;
                                 continue}
                               switch$4 = 1;
                               break
                              }}}
                       else
                        switch$3 = 1;
                      else
                       if(31 === _f9_[0])
                        {var _gb_=_f8_[2];
                         if(_gb_)
                          {var _gc_=_gb_[1],_gd_=_f9_[1],switch$5=0;
                           if(typeof _gc_ !== "number")
                            switch(_gc_[0])
                             {case 23:
                               var rem$1=_gb_[2],lbl$10=_gc_[1];
                               if(is_immed_const(_f7_))
                                {emit_branch_comp(_gd_);
                                 out_const(_f7_);
                                 out_label(lbl$10);
                                 var param$0=rem$1;
                                 continue}
                               switch$5 = 1;
                               break;
                              case 24:
                               var rem$2=_gb_[2],lbl$11=_gc_[1];
                               if(is_immed_const(_f7_))
                                {emit_branch_comp(caml_call1(Lambda[27],_gd_));
                                 out_const(_f7_);
                                 out_label(lbl$11);
                                 var param$0=rem$2;
                                 continue}
                               switch$5 = 1;
                               break
                              }}}
                       else
                        switch$3 = 1}
                    var c$8=_fZ_[2],switch$6=0;
                    switch(_f7_[0])
                     {case 0:
                       var _f__=_f7_[1],switch$7=0;
                       switch(_f__[0])
                        {case 0:
                          var i$1=_f__[1];
                          if(is_immed$0(i$1))
                           {var switch$8=0;
                            if(0 <= i$1 && ! (3 < i$1))
                             {out(Opcodes[105] + i$1 | 0);switch$8 = 1}
                            if(! switch$8){out(Opcodes[109]);out_int(i$1)}}
                          else
                           switch$7 = 1;
                          break;
                         case 1:var c$9=_f__[1];out(Opcodes[109]);out_int(c$9);break;
                         default:switch$7 = 1}
                       if(! switch$7)switch$6 = 1;
                       break;
                      case 1:
                       var i$2=_f7_[1],switch$9=0;
                       if(0 <= i$2 && ! (3 < i$2))
                        {out(Opcodes[105] + i$2 | 0);switch$9 = 1}
                       if(! switch$9){out(Opcodes[109]);out_int(i$2)}
                       switch$6 = 1;
                       break;
                      case 2:
                       if(! _f7_[2])
                        {var t$1=_f7_[1];
                         if(0 === t$1)
                          out(Opcodes[61]);
                         else
                          {out(Opcodes[62]);out_int(t$1)}
                         switch$6 = 1}
                       break
                      }
                    if(! switch$6){out(Opcodes[55]);slot_for_literal(_f7_)}
                    var param$0=c$8;
                    continue;
                   case 35:
                    var _ge_=_f0_[1],_gf_=_ge_[4];
                    if(typeof _gf_ === "number" && ! _gf_)
                     {var _gg_=_fZ_[2];
                      if(_gg_)
                       {var _gh_=_gg_[1],switch$10=0;
                        if(typeof _gh_ === "number")
                         switch$10 = 1;
                        else
                         switch(_gh_[0])
                          {case 13:
                            var _gi_=_gg_[2];
                            if(_gi_)
                             {var _gj_=_gi_[1];
                              if(typeof _gj_ !== "number" && 18 === _gj_[0])
                               {var
                                 c$11=_gi_[2],
                                 param$3=[0,0,[0,_gh_,[0,_gj_,remerge_events(_ge_,c$11)]]],
                                 param$0=param$3;
                                continue}}
                            break;
                           case 1:
                           case 2:
                           case 12:
                           case 15:break;
                           default:switch$10 = 1}
                        if(! switch$10)
                         {var
                           c$10=_gg_[2],
                           param$2=[0,0,[0,_gh_,remerge_events(_ge_,c$10)]],
                           param$0=param$2;
                          continue}}}
                    break;
                   default:switch$0 = 1}}}}
          else
           if(13 === _fY_[0])
            {var _gk_=param$0[2];
             if(_gk_)
              {var _gl_=_gk_[1];
               if(typeof _gl_ !== "number" && 18 === _gl_[0])
                {var c$12=_gk_[2],n$20=_gl_[1],id=_fY_[1];
                 out(Opcodes[56]);
                 slot_for_getglobal(id);
                 out_int(n$20);
                 var param$0=c$12;
                 continue}}}
          var c$1=param$0[2];
          if(typeof _fY_ === "number")
           switch(_fY_)
            {case 0:out(Opcodes[10]);break;
             case 1:out(Opcodes[42]);break;
             case 2:out(Opcodes[80]);break;
             case 3:out(Opcodes[81]);break;
             case 4:out(Opcodes[82]);break;
             case 5:out(Opcodes[149]);break;
             case 6:out(Opcodes[83]);break;
             case 7:out(Opcodes[84]);break;
             case 8:out(Opcodes[89]);break;
             case 9:out(Opcodes[91]);break;
             case 10:out(Opcodes[93]);break;
             case 11:out(Opcodes[110]);break;
             case 12:out(Opcodes[111]);break;
             case 13:out(Opcodes[112]);break;
             case 14:out(Opcodes[113]);break;
             case 15:out(Opcodes[114]);break;
             case 16:out(Opcodes[115]);break;
             case 17:out(Opcodes[116]);break;
             case 18:out(Opcodes[117]);break;
             case 19:out(Opcodes[118]);break;
             case 20:out(Opcodes[119]);break;
             case 21:out(Opcodes[120]);break;
             case 22:out(Opcodes[121]);break;
             case 23:out(Opcodes[130]);break;
             case 24:out(Opcodes[138]);break;
             case 25:out(Opcodes[131]);break;
             case 26:out(Opcodes[143]);break;
             default:out(Opcodes[144])}
          else
           switch(_fY_[0])
            {case 0:
              var lbl=_fY_[1];
              if(label_table[1].length - 1 <= lbl)extend_label_table(lbl);
              var match=caml_check_bound(label_table[1],lbl)[1 + lbl];
              if(0 === match[0])
               caml_call1(Misc[1],cst_Emitcode_define_label);
              else
               {var patchlist=match[1];
                caml_call2(Stdlib_list[15],backpatch,patchlist);
                var _fQ_=[0,out_position[1]];
                caml_check_bound(label_table[1],lbl)[1 + lbl] = _fQ_}
              break;
             case 1:
              var n=_fY_[1];
              if(8 <= n)
               {out(Opcodes[9]);out_int(n)}
              else
               out(Opcodes[1] + n | 0);
              break;
             case 2:
              var n$0=_fY_[1],switch$11=0;
              if(1 <= n$0 && ! (4 < n$0))
               out((Opcodes[22] + n$0 | 0) - 1 | 0);
              else
               switch$11 = 1;
              if(switch$11){out(Opcodes[26]);out_int(n$0)}
              break;
             case 3:var n$1=_fY_[1];out(Opcodes[20]);out_int(n$1);break;
             case 4:var n$2=_fY_[1];out(Opcodes[21]);out_int(n$2);break;
             case 5:var lbl$0=_fY_[1];out(Opcodes[32]);out_label(lbl$0);break;
             case 6:
              var n$3=_fY_[1];
              if(4 <= n$3)
               {out(Opcodes[33]);out_int(n$3)}
              else
               out((Opcodes[34] + n$3 | 0) - 1 | 0);
              break;
             case 7:
              var sz=_fY_[2],n$4=_fY_[1];
              if(4 <= n$4)
               {out(Opcodes[37]);out_int(n$4);out_int(sz)}
              else
               {out((Opcodes[38] + n$4 | 0) - 1 | 0);out_int(sz)}
              break;
             case 8:var n$5=_fY_[1];out(Opcodes[41]);out_int(n$5);break;
             case 9:var n$6=_fY_[1];out(Opcodes[43]);out_int(n$6);break;
             case 10:
              var n$7=_fY_[2],lbl$1=_fY_[1];
              out(Opcodes[44]);
              out_int(n$7);
              out_label(lbl$1);
              break;
             case 11:
              var n$8=_fY_[2],lbls=_fY_[1];
              out(Opcodes[45]);
              out_int(caml_call1(Stdlib_list[1],lbls));
              out_int(n$8);
              var
               org=out_position[1],
               _fU_=
                function(org)
                  {return function(_go_){return out_label_with_orig(org,_go_)}}
                 (org);
              caml_call2(Stdlib_list[15],_fU_,lbls);
              break;
             case 12:
              var ofs=_fY_[1],switch$12=0;
              if(-2 === ofs || 0 === ofs || 2 === ofs)
               switch$12 = 1;
              else
               {out(Opcodes[49]);out_int(ofs)}
              if(switch$12)out(Opcodes[47] + (ofs / 2 | 0) | 0);
              break;
             case 13:
              var q=_fY_[1];out(Opcodes[54]);slot_for_getglobal(q);break;
             case 14:
              var q$0=_fY_[1];
              out(Opcodes[58]);
              enter([2,q$0]);
              out_int(0);
              break;
             case 15:
              var sc=_fY_[1],switch$13=0;
              switch(sc[0])
               {case 0:
                 var _fV_=sc[1];
                 switch(_fV_[0])
                  {case 0:
                    var i=_fV_[1];
                    if(is_immed$0(i))
                     {var switch$14=0;
                      if(0 <= i && ! (3 < i))
                       {out(Opcodes[100] + i | 0);switch$14 = 1}
                      if(! switch$14){out(Opcodes[104]);out_int(i)}}
                    else
                     switch$13 = 1;
                    break;
                   case 1:var c=_fV_[1];out(Opcodes[104]);out_int(c);break;
                   default:switch$13 = 1}
                 break;
                case 1:
                 var i$0=sc[1],switch$15=0;
                 if(0 <= i$0 && ! (3 < i$0))
                  {out(Opcodes[100] + i$0 | 0);switch$15 = 1}
                 if(! switch$15){out(Opcodes[104]);out_int(i$0)}
                 break;
                case 2:
                 if(sc[2])
                  switch$13 = 1;
                 else
                  {var t=sc[1];
                   if(0 === t)
                    out(Opcodes[59]);
                   else
                    {out(Opcodes[60]);out_int(t)}}
                 break;
                default:switch$13 = 1}
              if(switch$13){out(Opcodes[54]);slot_for_literal(sc)}
              break;
             case 16:
              var t$0=_fY_[2],n$9=_fY_[1];
              if(0 === n$9)
               if(0 === t$0)
                out(Opcodes[59]);
               else
                {out(Opcodes[60]);out_int(t$0)}
              else
               if(4 <= n$9)
                {out(Opcodes[63]);out_int(n$9);out_int(t$0)}
               else
                {out((Opcodes[64] + n$9 | 0) - 1 | 0);out_int(t$0)}
              break;
             case 17:
              var n$10=_fY_[1];
              if(0 === n$10)
               out(Opcodes[59]);
              else
               {out(Opcodes[67]);out_int(n$10)}
              break;
             case 18:
              var n$11=_fY_[1];
              if(4 <= n$11)
               {out(Opcodes[72]);out_int(n$11)}
              else
               out(Opcodes[68] + n$11 | 0);
              break;
             case 19:
              var n$12=_fY_[1];
              if(4 <= n$12)
               {out(Opcodes[78]);out_int(n$12)}
              else
               out(Opcodes[74] + n$12 | 0);
              break;
             case 20:var n$13=_fY_[1];out(Opcodes[73]);out_int(n$13);break;
             case 21:var n$14=_fY_[1];out(Opcodes[79]);out_int(n$14);break;
             case 22:
              var lbl$2=_fY_[1];out(Opcodes[85]);out_label(lbl$2);break;
             case 23:
              var lbl$3=_fY_[1];out(Opcodes[86]);out_label(lbl$3);break;
             case 24:
              var lbl$4=_fY_[1];out(Opcodes[87]);out_label(lbl$4);break;
             case 25:
              var lbl$5=_fY_[1];out(Opcodes[86]);out_label(lbl$5);break;
             case 26:
              var lbl$6=_fY_[1];out(Opcodes[87]);out_label(lbl$6);break;
             case 27:
              var tbl_block=_fY_[2],tbl_const=_fY_[1];
              out(Opcodes[88]);
              out_int(tbl_const.length - 1 + (tbl_block.length - 1 << 16) | 0);
              var
               org$0=out_position[1],
               _fW_=
                function(org)
                  {return function(_gn_){return out_label_with_orig(org,_gn_)}}
                 (org$0);
              caml_call2(Stdlib_array[13],_fW_,tbl_const);
              var
               _fX_=
                function(org)
                  {return function(_gm_){return out_label_with_orig(org,_gm_)}}
                 (org$0);
              caml_call2(Stdlib_array[13],_fX_,tbl_block);
              break;
             case 28:
              var lbl$7=_fY_[1];out(Opcodes[90]);out_label(lbl$7);break;
             case 29:
              switch(_fY_[1])
               {case 0:out(Opcodes[92]);break;
                case 1:out(Opcodes[147]);break;
                default:out(Opcodes[148])}
              break;
             case 30:
              var n$15=_fY_[2],name=_fY_[1];
              if(5 < n$15)
               {out(Opcodes[99]);out_int(n$15);slot_for_c_prim(name)}
              else
               {out((Opcodes[94] + n$15 | 0) - 1 | 0);slot_for_c_prim(name)}
              break;
             case 31:
              var c$0=_fY_[1];
              switch(c$0)
               {case 0:out(Opcodes[122]);break;
                case 1:out(Opcodes[123]);break;
                case 2:out(Opcodes[124]);break;
                case 3:out(Opcodes[126]);break;
                case 4:out(Opcodes[125]);break;
                default:out(Opcodes[127])}
              break;
             case 32:var n$16=_fY_[1];out(Opcodes[128]);out_int(n$16);break;
             case 33:var n$17=_fY_[1];out(Opcodes[129]);out_int(n$17);break;
             case 34:
              var tag=_fY_[1];out(Opcodes[142]);out_int(tag);out_int(0);break;
             default:
              var
               ev=_fY_[1],
               path=ev[3][1][1],
               abspath=caml_call1(Location[19],path),
               _fR_=debug_dirs[1],
               _fS_=caml_call1(Stdlib_filename[14],abspath);
              debug_dirs[1] = caml_call2(Misc[12][4][39][4],_fS_,_fR_);
              if(caml_call1(Stdlib_filename[5],path))
               {var _fT_=caml_sys_getcwd(0),cwd=caml_call1(Location[18],_fT_);
                debug_dirs[1]
                =
                caml_call2(Misc[12][4][39][4],cwd,debug_dirs[1])}
              ev[1] = out_position[1];
              events[1] = [0,ev,events[1]]}
          var param$0=c$1;
          continue}
        return 0}}
    function to_file(outchan,unit_name,objfile,required_globals,code)
     {init(0);
      caml_call2(Stdlib[66],outchan,Config[23]);
      var pos_depl=caml_call1(Stdlib[74],outchan);
      caml_call2(Stdlib[71],outchan,0);
      var pos_code=caml_call1(Stdlib[74],outchan);
      emit(code);
      caml_call4(Misc[45][7],outchan,out_buffer[1],0,out_position[1]);
      if(Clflags[17][1])
       {var
         _fH_=debug_dirs[1],
         _fI_=caml_call1(Location[19],objfile),
         _fJ_=caml_call1(Stdlib_filename[14],_fI_);
        debug_dirs[1] = caml_call2(Misc[12][4][39][4],_fJ_,_fH_);
        var p=caml_call1(Stdlib[74],outchan);
        caml_call2(Stdlib[72],outchan,events[1]);
        var _fK_=caml_call1(Misc[12][4][39][23],debug_dirs[1]);
        caml_call2(Stdlib[72],outchan,_fK_);
        var size_debug=caml_call1(Stdlib[74],outchan) - p | 0,pos_debug=p}
      else
       var size_debug=0,pos_debug=0;
      var
       _fL_=Clflags[21][1],
       _fM_=caml_call2(Stdlib_list[17],Primitive[6],Translmod[11][1]),
       _fN_=caml_call1(Ident[6][22],required_globals),
       _fO_=caml_call1(Env[109],0),
       _fP_=caml_call1(Stdlib_list[9],reloc_info[1]),
       compunit=
        [0,
         unit_name,
         pos_code,
         out_position[1],
         _fP_,
         _fO_,
         _fN_,
         _fM_,
         _fL_,
         pos_debug,
         size_debug];
      init(0);
      caml_call1(Btype[52],0);
      var pos_compunit=caml_call1(Stdlib[74],outchan);
      marshal_to_channel_with_possib
       (objfile,cst_bytecode_unit,outchan,compunit);
      caml_call2(Stdlib[73],outchan,pos_depl);
      return caml_call2(Stdlib[71],outchan,pos_compunit)}
    function to_memory(init_code,fun_code)
     {init(0);
      emit(init_code);
      emit(fun_code);
      var code=caml_call1(Misc[45][1],out_position[1]);
      caml_call5(Misc[45][5],out_buffer[1],0,code,0,out_position[1]);
      var reloc=caml_call1(Stdlib_list[9],reloc_info[1]),events$0=events[1];
      init(0);
      return [0,code,reloc,events$0]}
    function to_packed_file(outchan,code)
     {init(0);
      emit(code);
      caml_call4(Misc[45][7],outchan,out_buffer[1],0,out_position[1]);
      var reloc=reloc_info[1];
      init(0);
      return reloc}
    function reset$0(param)
     {out_buffer[1] = caml_call1(Misc[45][1],1024);
      out_position[1] = 0;
      label_table[1] = [0];
      reloc_info[1] = 0;
      return 0}
    var
     Emitcode=
      [0,
       to_file,
       to_memory,
       to_packed_file,
       reset$0,
       marshal_to_channel_with_possib];
    caml_register_global(344,Emitcode,"Emitcode");
    var
     Error$0=[248,cst_Bytelink_Error,caml_fresh_oo_id(0)],
     lib_ccobjs=[0,0],
     lib_ccopts=[0,0],
     lib_dllibs=[0,0];
    function add_ccobjs(origin,l)
     {var _fB_=1 - Clflags[57][1];
      if(_fB_)
       {var
         _fC_=0 === caml_ml_string_length(Clflags[47][1])?1:0,
         _fD_=_fC_?0 === caml_ml_string_length(Clflags[46][1])?1:0:_fC_;
        if(_fD_)
         {if(l[2])Clflags[22][1] = 1;
          lib_ccobjs[1] = caml_call2(Stdlib[37],l[3],lib_ccobjs[1]);
          var
           replace_origin=caml_call2(Misc[34],cst_CAMLORIGIN,origin),
           _fE_=lib_ccopts[1],
           _fF_=caml_call2(Stdlib_list[17],replace_origin,l[4]);
          lib_ccopts[1] = caml_call2(Stdlib[37],_fF_,_fE_)}
        lib_dllibs[1] = caml_call2(Stdlib[37],l[5],lib_dllibs[1]);
        var _fG_=0}
      else
       var _fG_=_fB_;
      return _fG_}
    var missing_globals=[0,Ident[6][1]];
    function is_required(param)
     {var rel=param[1];
      if(2 === rel[0])
       {var id=rel[1];return caml_call2(Ident[6][3],id,missing_globals[1])}
      return 0}
    function add_required(compunit)
     {function add(id)
       {missing_globals[1] = caml_call2(Ident[6][4],id,missing_globals[1]);
        return 0}
      var _fA_=caml_call1(Symtable[19],compunit[4]);
      caml_call2(Stdlib_list[15],add,_fA_);
      return caml_call2(Stdlib_list[15],add,compunit[6])}
    function remove_required(param)
     {var rel=param[1];
      if(2 === rel[0])
       {var id=rel[1];
        missing_globals[1] = caml_call2(Ident[6][6],id,missing_globals[1]);
        return 0}
      return 0}
    function scan_file(obj_name,tolink)
     {try
       {var file_name=caml_call1(Load_path[6],obj_name)}
      catch(_fz_)
       {_fz_ = caml_wrap_exception(_fz_);
        if(_fz_ === Stdlib[8])throw [0,Error$0,[0,obj_name]];
        throw _fz_}
      var ic=caml_call1(Stdlib[80],file_name);
      try
       {var
         buffer=
          caml_call2(Stdlib[86],ic,caml_ml_string_length(Config[23]));
        if(caml_string_equal(buffer,Config[23]))
         {var compunit_pos=caml_call1(Stdlib[88],ic);
          caml_call2(Stdlib[90],ic,compunit_pos);
          var compunit=caml_call1(Stdlib[89],ic);
          caml_call1(Stdlib[93],ic);
          add_required(compunit);
          caml_call2(Stdlib_list[15],remove_required,compunit[4]);
          var _fv_=[0,[0,file_name,compunit],tolink]}
        else
         {if(! caml_string_equal(buffer,Config[24]))
           throw [0,Error$0,[1,file_name]];
          var pos_toc=caml_call1(Stdlib[88],ic);
          caml_call2(Stdlib[90],ic,pos_toc);
          var toc=caml_call1(Stdlib[89],ic);
          caml_call1(Stdlib[93],ic);
          add_ccobjs(caml_call1(Stdlib_filename[14],file_name),toc);
          var
           _fw_=0,
           _fx_=toc[1],
           _fy_=
            function(compunit,reqd)
             {if
               (!
                compunit[8]
                &&
                !
                Clflags[21][1]
                &&
                !
                caml_call2(Stdlib_list[31],is_required,compunit[4]))
               return reqd;
              add_required(compunit);
              caml_call2(Stdlib_list[15],remove_required,compunit[4]);
              return [0,compunit,reqd]},
           required=caml_call3(Stdlib_list[24],_fy_,_fx_,_fw_),
           _fv_=[0,[1,file_name,required],tolink]}
        return _fv_}
      catch(x)
       {x = caml_wrap_exception(x);
        if(x === Stdlib[12])
         {caml_call1(Stdlib[93],ic);throw [0,Error$0,[1,file_name]]}
        caml_call1(Stdlib[93],ic);
        throw x}}
    var
     _bZ_=Misc[12][4],
     Consistbl$0=
      caml_call1(Consistbl[1],[0,_bZ_[39],_bZ_[40],_bZ_[41],_bZ_[33]]),
     crc_interfaces=caml_call1(Consistbl$0[1],0),
     interfaces=[0,0],
     implementations_defined=[0,0];
    function check_consistency(file_name,cu)
     {try
       {var
         _fo_=cu[5],
         _fp_=
          function(param)
           {var crco=param[2],name=param[1];
            interfaces[1] = [0,name,interfaces[1]];
            if(crco)
             {var crc=crco[1];
              return caml_string_equal(name,cu[1])
                      ?caml_call4
                        (Consistbl$0[5],crc_interfaces,name,crc,file_name)
                      :caml_call4
                        (Consistbl$0[3],crc_interfaces,name,crc,file_name)}
            return 0};
        caml_call2(Stdlib_list[15],_fp_,_fo_)}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] === Consistbl$0[10])
         {var auth=exn[4],user=exn[3],name=exn[2];
          throw [0,Error$0,[4,name,user,auth]]}
        throw exn}
      try
       {var
         source=caml_call2(Stdlib_list[43],cu[1],implementations_defined[1]),
         _fq_=caml_call1(Location[20],source),
         _fr_=caml_call1(Location[20],file_name),
         _fs_=[15,cu[1],_fr_,_fq_],
         _ft_=caml_call1(Location[3],file_name);
        caml_call2(Location[37],_ft_,_fs_)}
      catch(_fu_)
       {_fu_ = caml_wrap_exception(_fu_);if(_fu_ !== Stdlib[8])throw _fu_}
      implementations_defined[1]
      =
      [0,[0,cu[1],file_name],implementations_defined[1]];
      return 0}
    function extract_crc_interfaces(param)
     {return caml_call2(Consistbl$0[7],interfaces[1],crc_interfaces)}
    function clear_crc_interfaces(param)
     {caml_call1(Consistbl$0[2],crc_interfaces);interfaces[1] = 0;return 0}
    var debug_info=[0,0];
    function link_compunit(output_fun,currpos_fun,inchan,file_name,compunit)
     {check_consistency(file_name,compunit);
      caml_call2(Stdlib[90],inchan,compunit[2]);
      var code_block=caml_call2(Misc[45][9],inchan,compunit[3]);
      caml_call2(Symtable[2],code_block,compunit[4]);
      var _fj_=Clflags[17][1],_fk_=_fj_?0 < compunit[9]?1:0:_fj_;
      if(_fk_)
       {caml_call2(Stdlib[90],inchan,compunit[9]);
        var
         debug_event_list=caml_call1(Stdlib[89],inchan),
         debug_dirs=caml_call1(Stdlib[89],inchan),
         _fl_=caml_call1(Location[19],file_name),
         file_path=caml_call1(Stdlib_filename[14],_fl_),
         debug_dirs$0=
          caml_call2(Stdlib_list[34],file_path,debug_dirs)
           ?debug_dirs
           :[0,file_path,debug_dirs],
         _fm_=debug_info[1];
        debug_info[1]
        =
        [0,[0,caml_call1(currpos_fun,0),debug_event_list,debug_dirs$0],_fm_]}
      caml_call2(Stdlib_array[13],output_fun,code_block);
      var _fn_=Clflags[21][1];
      return _fn_?caml_call2(Stdlib_list[15],Symtable[3],compunit[7]):_fn_}
    function link_object(output_fun,currpos_fun,file_name,compunit)
     {var inchan=caml_call1(Stdlib[80],file_name);
      try
       {link_compunit(output_fun,currpos_fun,inchan,file_name,compunit);
        var _fi_=caml_call1(Stdlib[93],inchan);
        return _fi_}
      catch(x)
       {x = caml_wrap_exception(x);
        if(x[1] === Symtable[27])
         {var msg=x[2];
          caml_call1(Stdlib[93],inchan);
          throw [0,Error$0,[3,file_name,msg]]}
        caml_call1(Stdlib[93],inchan);
        throw x}}
    function link_archive(output_fun,currpos_fun,file_name,units_required)
     {var inchan=caml_call1(Stdlib[80],file_name);
      try
       {var
         _fd_=
          function(cu)
           {var
             _ff_=caml_call2(Stdlib[28],cu[1],cst$2),
             _fg_=caml_call2(Stdlib[28],cst$3,_ff_),
             name=caml_call2(Stdlib[28],file_name,_fg_);
            try
             {var _fh_=link_compunit(output_fun,currpos_fun,inchan,name,cu);
              return _fh_}
            catch(exn)
             {exn = caml_wrap_exception(exn);
              if(exn[1] === Symtable[27])
               {var msg=exn[2];throw [0,Error$0,[3,name,msg]]}
              throw exn}};
        caml_call2(Stdlib_list[15],_fd_,units_required);
        var _fe_=caml_call1(Stdlib[93],inchan);
        return _fe_}
      catch(x)
       {x = caml_wrap_exception(x);caml_call1(Stdlib[93],inchan);throw x}}
    function link_file(output_fun,currpos_fun,param)
     {if(0 === param[0])
       {var unit=param[2],file_name=param[1];
        return link_object(output_fun,currpos_fun,file_name,unit)}
      var units=param[2],file_name$0=param[1];
      return link_archive(output_fun,currpos_fun,file_name$0,units)}
    function output_debug_info(oc)
     {var _fa_=caml_call1(Stdlib_list[1],debug_info[1]);
      caml_call2(Stdlib[71],oc,_fa_);
      var _fb_=debug_info[1];
      function _fc_(param)
       {var debug_dirs=param[3],evl=param[2],ofs=param[1];
        caml_call2(Stdlib[71],oc,ofs);
        caml_call2(Stdlib[72],oc,evl);
        return caml_call2(Stdlib[72],oc,debug_dirs)}
      caml_call2(Stdlib_list[15],_fc_,_fb_);
      debug_info[1] = 0;
      return 0}
    function output_stringlist(oc,l)
     {function _e$_(s)
       {caml_call2(Stdlib[66],oc,s);return caml_call2(Stdlib[70],oc,0)}
      return caml_call2(Stdlib_list[15],_e$_,l)}
    function make_absolute(file)
     {if(caml_call1(Stdlib_filename[5],file))
       {var
         _e9_=caml_sys_getcwd(0),
         _e__=caml_call2(Stdlib_filename[4],_e9_,file);
        return caml_call1(Location[18],_e__)}
      return file}
    function link_bytecode(final_name,tolink,exec_name,standalone)
     {var final_name$0=caml_call2(Stdlib_option[3],final_name,exec_name);
      function _eW_(param)
       {if(0 === param[0])
         {var file_name=param[1];
          if(caml_string_equal(file_name,exec_name))
           throw [0,Error$0,[2,exec_name]]}
        return 0}
      caml_call2(Stdlib_list[15],_eW_,tolink);
      caml_call1(Misc[16],exec_name);
      var
       outperm=Clflags[129][1]?511:438,
       outchan=caml_call3(Stdlib[62],_b0_,outperm,exec_name);
      function _eX_(param)
       {var _e0_=standalone?Clflags[129][1]:standalone;
        if(_e0_)
         {var
           header=
            0 < caml_ml_string_length(Clflags[47][1])
             ?cst_camlheader_ur
             :caml_call2(Stdlib[28],cst_camlheader,Clflags[128][1]);
          try
           {var
             _e1_=caml_call1(Load_path[6],header),
             inchan=caml_call1(Stdlib[80],_e1_);
            caml_call2(Misc[20],inchan,outchan);
            caml_call1(Stdlib[93],inchan)}
          catch(exn)
           {exn = caml_wrap_exception(exn);
            if(exn === Stdlib[8])throw [0,Error$0,[0,header]];
            if(exn[1] === Stdlib[11])
             {var msg=exn[2];throw [0,Error$0,[8,header,msg]]}
            throw exn}}
        caml_call1(Bytesections[1],outchan);
        var
         _e2_=0 < caml_ml_string_length(Clflags[47][1])?1:0,
         _e3_=_e2_?Clflags[129][1]:_e2_;
        if(_e3_)
         {var runtime=make_absolute(Clflags[47][1]);
          if(125 < caml_ml_string_length(runtime))
           var
            _e4_=caml_call2(Stdlib[28],runtime,cst_0),
            runtime$0=caml_call2(Stdlib[28],cst_bin_sh_exec,_e4_);
          else
           var runtime$0=runtime;
          caml_call2(Stdlib[66],outchan,runtime$0);
          caml_call2(Stdlib[65],outchan,10);
          caml_call2(Bytesections[2],outchan,cst_RNTM)}
        var start_code=caml_call1(Stdlib[74],outchan);
        caml_call1(Symtable[1],0);
        clear_crc_interfaces(0);
        var
         sharedobjs=caml_call2(Stdlib_list[17],Dll[1],Clflags[10][1]),
         check_dlls=
          standalone?caml_string_equal(Config[50],Config[49]):standalone;
        if(check_dlls)
         {caml_call1(Dll[8],Clflags[14][1]);
          var _e5_=caml_call1(Load_path[5],0);
          caml_call1(Dll[6],_e5_);
          try
           {caml_call2(Dll[2],0,sharedobjs)}
          catch(exn)
           {exn = caml_wrap_exception(exn);
            if(exn[1] === Stdlib[7])
             {var reason=exn[2];throw [0,Error$0,[6,reason]]}
            throw exn}}
        var output_fun=caml_call1(Stdlib[67],outchan);
        function currpos_fun(param)
         {return caml_call1(Stdlib[74],outchan) - start_code | 0}
        function _e6_(_e8_){return link_file(output_fun,currpos_fun,_e8_)}
        caml_call2(Stdlib_list[15],_e6_,tolink);
        if(check_dlls)caml_call1(Dll[3],0);
        caml_call2(Stdlib[70],outchan,Opcodes[144]);
        caml_call2(Stdlib[70],outchan,0);
        caml_call2(Stdlib[70],outchan,0);
        caml_call2(Stdlib[70],outchan,0);
        caml_call2(Bytesections[2],outchan,cst_CODE);
        if(standalone)
         {output_stringlist(outchan,Clflags[58][1]);
          caml_call2(Bytesections[2],outchan,cst_DLPT);
          output_stringlist(outchan,sharedobjs);
          caml_call2(Bytesections[2],outchan,cst_DLLS)}
        caml_call1(Symtable[6],outchan);
        caml_call2(Bytesections[2],outchan,cst_PRIM);
        marshal_to_channel_with_possib
         (final_name$0,
          cst_bytecode_executable,
          outchan,
          caml_call1(Symtable[4],0));
        caml_call2(Bytesections[2],outchan,cst_DATA);
        caml_call1(Symtable[5],outchan);
        caml_call2(Bytesections[2],outchan,cst_SYMB);
        var _e7_=extract_crc_interfaces(0);
        caml_call2(Stdlib[72],outchan,_e7_);
        caml_call2(Bytesections[2],outchan,cst_CRCS);
        if(Clflags[17][1])
         {output_debug_info(outchan);
          caml_call2(Bytesections[2],outchan,cst_DBUG)}
        return caml_call1(Bytesections[3],outchan)}
      var
       _eY_=[0,function(param){return caml_call1(Misc[16],exec_name)}],
       _eZ_=[0,function(param){return caml_call1(Stdlib[76],outchan)}];
      return caml_call3(Misc[4],_eZ_,_eY_,_eX_)}
    var output_code_string_counter=[0,0];
    function output_data_string(outchan,data)
     {var counter=[0,0],_eT_=caml_ml_string_length(data) - 1 | 0,_eS_=0;
      if(! (_eT_ < 0))
       {var i=_eS_;
        for(;;)
         {var _eU_=runtime.caml_string_get(data,i);
          caml_call3(Stdlib_printf[1],outchan,_b2_,_eU_);
          counter[1]++;
          if(12 <= counter[1])
           {caml_call2(Stdlib[66],outchan,cst$4);counter[1] = 0}
          var _eV_=i + 1 | 0;
          if(_eT_ !== i){var i=_eV_;continue}
          break}}
      return 0}
    function build_custom_runtime(prim_name,exec_name)
     {var
       runtime_lib=
        Clflags[129][1]
         ?caml_call2(Stdlib[28],cst_lcamlrun,Clflags[128][1])
         :cst$8,
       switch$0=0;
      if(Config[6] && ! Clflags[77][1])
       {var
         debug_prefix_map=
          [0,caml_call2(Stdlib_printf[4],_b5_,prim_name),0];
        switch$0 = 1}
      if(! switch$0)var debug_prefix_map=0;
      var
       _eM_=caml_call2(Stdlib[28],cst$7,Config[12]),
       _eN_=caml_call1(Clflags[123],cst_I),
       exitcode=caml_call2(Stdlib[28],_eN_,_eM_),
       _eO_=caml_call1(Stdlib_list[9],Clflags[9][1]),
       _eP_=caml_call2(Stdlib[37],_eO_,[0,runtime_lib,0]),
       _eQ_=caml_call2(Stdlib[37],[0,prim_name,0],_eP_),
       _eR_=caml_call2(Stdlib[37],debug_prefix_map,_eQ_);
      return 0 === caml_call4(Ccomp[8],0,exec_name,_eR_,exitcode)?1:0}
    function link(objfiles,output_name)
     {var _d$_=Clflags[25][1],_ea_=Clflags[27][1];
      if(Clflags[30][1])
       var objfiles$0=objfiles;
      else
       {var switch$0=0;
        if(_d$_ && ! _ea_)
         var objfiles$0=[0,cst_stdlib_cma$0,objfiles];
        else
         switch$0 = 1;
        if(switch$0)
         var
          objfiles$0=
           caml_call2(Stdlib[37],[0,cst_stdlib_cma,objfiles],_b7_)}
      var
       tolink=caml_call3(Stdlib_list[24],scan_file,objfiles$0,0),
       _eb_=missing_globals[1];
      function _ec_(id){return 1 - caml_call1(Ident[22],id)}
      var
       missing_modules=caml_call2(Ident[6][18],_ec_,_eb_),
       match=caml_call1(Ident[6][22],missing_modules);
      if(match)
       {var id=match[1];throw [0,Error$0,[7,caml_call1(Ident[15],id)]]}
      var _ed_=caml_call2(Stdlib[37],Clflags[9][1],lib_ccobjs[1]);
      Clflags[9][1] = _ed_;
      var _ee_=caml_call2(Stdlib[37],lib_ccopts[1],Clflags[28][1]);
      Clflags[28][1] = _ee_;
      var _ef_=caml_call2(Stdlib[37],lib_dllibs[1],Clflags[10][1]);
      Clflags[10][1] = _ef_;
      if(Clflags[22][1])
       {if(Clflags[25][1])
         {var basename=caml_call1(Stdlib_filename[11],output_name),switch$1=0;
          if
           (Clflags[26][1]
            &&
            !
            caml_call2(Stdlib_filename[7],output_name,cst_c))
           {var
             stable_name$0=stable_name,
             c_file=caml_call3(Stdlib_filename[16],0,cst_camlobj,cst_c$2);
            switch$1 = 1}
          if(! switch$1)
           {var f=caml_call2(Stdlib[28],basename,cst_c$0);
            if(runtime.caml_sys_file_exists(f))throw [0,Error$0,[5,f]];
            var stable_name$0=0,c_file=f}
          if(Clflags[26][1])
           var
            _eg_=Config[42],
            _eh_=caml_call1(Stdlib_filename[12],c_file),
            obj_file=caml_call2(Stdlib[28],_eh_,_eg_);
          else
           var obj_file=caml_call2(Stdlib[28],basename,Config[42]);
          var
           temps=[0,0],
           _ei_=
            function(param)
             {var _ey_=Clflags[27][1],outchan$0=caml_call1(Stdlib[60],c_file);
              function _eu_(param)
               {caml_call2
                 (Stdlib[66],outchan$0,cst_define_CAML_INTERNALS_ifde);
                caml_call2(Stdlib[66],outchan$0,cst_static_int_caml_code);
                caml_call1(Symtable[1],0);
                clear_crc_interfaces(0);
                var currpos=[0,0];
                function output_fun(code)
                 {var pos=[0,0],len=caml_ml_bytes_length(code);
                  for(;;)
                   {if(pos[1] < len)
                     {var
                       c1=caml_bytes_get(code,pos[1]),
                       c2=caml_bytes_get(code,pos[1] + 1 | 0),
                       c3=caml_bytes_get(code,pos[1] + 2 | 0),
                       c4=caml_bytes_get(code,pos[1] + 3 | 0);
                      pos[1] = pos[1] + 4 | 0;
                      caml_call6(Stdlib_printf[1],outchan$0,_b1_,c4,c3,c2,c1);
                      output_code_string_counter[1]++;
                      if(6 <= output_code_string_counter[1])
                       {caml_call2(Stdlib[65],outchan$0,10);
                        output_code_string_counter[1] = 0}
                      continue}
                    currpos[1] = currpos[1] + caml_ml_bytes_length(code) | 0;
                    return 0}}
                function currpos_fun(param){return currpos[1]}
                function _eI_(_eL_)
                 {return link_file(output_fun,currpos_fun,_eL_)}
                caml_call2(Stdlib_list[15],_eI_,tolink);
                caml_call3(Stdlib_printf[1],outchan$0,_b4_,Opcodes[144]);
                caml_call2(Stdlib[66],outchan$0,cst_static_char_caml_data);
                output_data_string
                 (outchan$0,
                  caml_output_value_to_string(caml_call1(Symtable[4],0),0));
                caml_call2(Stdlib[66],outchan$0,cst$5);
                var
                 _eJ_=[0,[0,cst_CRCS$0,extract_crc_interfaces(0)],0],
                 _eK_=[0,[0,cst_PRIM$0,caml_call1(Symtable[9],0)],_eJ_],
                 sections=[0,[0,cst_SYMB$1,caml_call1(Symtable[8],0)],_eK_];
                caml_call2(Stdlib[66],outchan$0,cst_static_char_caml_sections);
                output_data_string
                 (outchan$0,caml_output_value_to_string(sections,0));
                caml_call2(Stdlib[66],outchan$0,cst$6);
                caml_call1(Symtable[7],outchan$0);
                if(_ey_)
                 caml_call2
                  (Stdlib[66],outchan$0,cst_ifdef_WIN32_int_wmain_int_);
                else
                 caml_call2
                  (Stdlib[66],outchan$0,cst_void_caml_startup_char_os_);
                return caml_call2
                        (Stdlib[66],outchan$0,cst_ifdef_cplusplus_endif)}
              var
               _ev_=[0,function(param){return caml_call1(Misc[16],c_file)}],
               _ew_=
                [0,function(param){return caml_call1(Stdlib[76],outchan$0)}];
              caml_call3(Misc[4],_ew_,_ev_,_eu_);
              if(Clflags[17][1])
               {var
                 _ex_=caml_call1(Stdlib_filename[12],c_file),
                 outfile=caml_call2(Stdlib[28],_ex_,cst_cds);
                caml_call1(Misc[16],outfile);
                var
                 outchan=caml_call3(Stdlib[62],_b3_,511,outfile),
                 _er_=
                  function(param)
                   {caml_call1(Bytesections[1],outchan);
                    caml_call1(Symtable[5],outchan);
                    caml_call2(Bytesections[2],outchan,cst_SYMB$0);
                    output_debug_info(outchan);
                    caml_call2(Bytesections[2],outchan,cst_DBUG$0);
                    return caml_call1(Bytesections[3],outchan)},
                 _es_=[0,function(param){return caml_call1(Misc[16],outfile)}],
                 _et_=
                  [0,function(param){return caml_call1(Stdlib[76],outchan)}];
                caml_call3(Misc[4],_et_,_es_,_er_)}
              if(Clflags[27][1])
               {temps[1] = [0,c_file,temps[1]];
                var _ez_=1 - build_custom_runtime(c_file,output_name);
                if(_ez_)throw [0,Error$0,0];
                return _ez_}
              var _eA_=1 - caml_call2(Stdlib_filename[7],output_name,cst_c$1);
              if(_eA_)
               {temps[1] = [0,c_file,temps[1]];
                if
                 (0
                  !==
                  caml_call4(Ccomp[3],[0,obj_file],0,stable_name$0,c_file))
                 throw [0,Error$0,0];
                var
                 _eB_=
                  1
                  -
                  caml_call2(Stdlib_filename[7],output_name,Config[42]),
                 _eC_=_eB_ || Clflags[26][1];
                if(_eC_)
                 {temps[1] = [0,obj_file,temps[1]];
                  if(caml_call2(Stdlib_filename[7],output_name,Config[42]))
                   var c_libs=cst$9,mode=3;
                  else
                   var c_libs=Config[12],mode=2;
                  var
                   runtime_lib=
                    Clflags[129][1]
                     ?caml_call2(Stdlib[28],cst_lcamlrun$0,Clflags[128][1])
                     :cst$10,
                   _eD_=caml_call1(Stdlib_list[9],Clflags[9][1]),
                   _eE_=caml_call2(Stdlib[37],_eD_,[0,runtime_lib,0]),
                   _eF_=caml_call2(Stdlib[37],[0,obj_file,0],_eE_),
                   _eG_=
                    1
                    -
                    (0 === caml_call4(Ccomp[8],mode,output_name,_eF_,c_libs)?1:0);
                  if(_eG_)throw [0,Error$0,0];
                  var _eH_=_eG_}
                else
                 var _eH_=_eC_}
              else
               var _eH_=_eA_;
              return _eH_},
           _ej_=0,
           _ek_=
            [0,
             function(param)
              {return caml_call2(Stdlib_list[15],Misc[16],temps[1])}];
          return caml_call3(Misc[4],_ek_,_ej_,_ei_)}
        var
         bytecode_name=caml_call3(Stdlib_filename[16],0,cst_camlcode,cst$11),
         prim_name=
          Clflags[77][1]
           ?caml_call2(Stdlib[28],output_name,cst_camlprim_c)
           :caml_call3(Stdlib_filename[16],0,cst_camlprim,cst_c$3),
         _el_=
          function(param)
           {link_bytecode([0,output_name],tolink,bytecode_name,0);
            var poc=caml_call1(Stdlib[60],prim_name);
            caml_call2(Stdlib[66],poc,cst_ifdef_cplusplus_extern_C_e);
            caml_call1(Symtable[7],poc);
            caml_call2(Stdlib[66],poc,cst_ifdef_cplusplus_endif$0);
            caml_call1(Stdlib[76],poc);
            var _ep_=Stdlib_sys[4],switch$0=0;
            if
             (caml_string_notequal(_ep_,cst_Cygwin)
              &&
              caml_string_notequal(_ep_,cst_Win32))
             var exec_name=output_name;
            else
             switch$0 = 1;
            if(switch$0)
             var
              exec_name=
               caml_call2(Stdlib_string[22],output_name,46)
                ?output_name
                :caml_call2(Stdlib[28],output_name,cst_exe);
            if(1 - build_custom_runtime(prim_name,exec_name))
             throw [0,Error$0,0];
            var _eq_=1 - Clflags[55][1];
            if(_eq_)
             {var
               oc=caml_call3(Stdlib[62],_b6_,0,exec_name),
               ic=caml_call1(Stdlib[80],bytecode_name);
              caml_call2(Misc[20],ic,oc);
              caml_call1(Stdlib[93],ic);
              return caml_call1(Stdlib[76],oc)}
            return _eq_},
         _em_=0,
         _en_=
          [0,
           function(param)
            {caml_call1(Misc[16],bytecode_name);
             var _eo_=1 - Clflags[77][1];
             return _eo_?caml_call1(Misc[16],prim_name):_eo_}];
        return caml_call3(Misc[4],_en_,_em_,_el_)}
      return link_bytecode(0,tolink,output_name,1)}
    function report_error$0(ppf,param)
     {if(typeof param === "number")
       return caml_call2(Stdlib_format[125],ppf,_b8_);
      else
       switch(param[0])
        {case 0:
          var name=param[1];
          return caml_call4(Stdlib_format[125],ppf,_b9_,Location[21],name);
         case 1:
          var name$0=param[1];
          return caml_call4(Stdlib_format[125],ppf,_b__,Location[21],name$0);
         case 2:
          var name$1=param[1];
          return caml_call3(Stdlib_format[125],ppf,_b$_,name$1);
         case 3:
          var err=param[2],name$2=param[1];
          return caml_call6
                  (Stdlib_format[125],
                   ppf,
                   _ca_,
                   Location[21],
                   name$2,
                   Symtable[28],
                   err);
         case 4:
          var file2=param[3],file1=param[2],intf=param[1];
          return caml_call7
                  (Stdlib_format[125],
                   ppf,
                   _cb_,
                   Location[21],
                   file1,
                   Location[21],
                   file2,
                   intf);
         case 5:
          var file=param[1];
          return caml_call4(Stdlib_format[125],ppf,_cc_,Location[21],file);
         case 6:
          var file$0=param[1];
          return caml_call4(Stdlib_format[125],ppf,_cd_,Location[21],file$0);
         case 7:
          var s=param[1];return caml_call3(Stdlib_format[125],ppf,_ce_,s);
         default:
          var header=param[2],msg=param[1];
          return caml_call4(Stdlib_format[125],ppf,_cf_,header,msg)}}
    function _cg_(param)
     {if(param[1] === Error$0)
       {var err=param[2];
        return [0,caml_call2(Location[48],report_error$0,err)]}
      return 0}
    caml_call1(Location[49],_cg_);
    function reset$1(param)
     {lib_ccobjs[1] = 0;
      lib_ccopts[1] = 0;
      lib_dllibs[1] = 0;
      missing_globals[1] = Ident[6][1];
      caml_call1(Consistbl$0[2],crc_interfaces);
      implementations_defined[1] = 0;
      debug_info[1] = 0;
      output_code_string_counter[1] = 0;
      return 0}
    var
     Bytelink=
      [0,
       link,
       reset$1,
       check_consistency,
       extract_crc_interfaces,
       Error$0,
       report_error$0];
    caml_register_global(354,Bytelink,"Bytelink");
    var Error$1=[248,cst_Bytelibrarian_Error,caml_fresh_oo_id(0)];
    function copy_compunit(ic,oc,compunit)
     {caml_call2(Stdlib[90],ic,compunit[2]);
      compunit[2] = caml_call1(Stdlib[74],oc);
      var _d8_=compunit[8],_d9_=_d8_ || Clflags[21][1];
      compunit[8] = _d9_;
      caml_call3(Misc[21],ic,oc,compunit[3]);
      var _d__=0 < compunit[9]?1:0;
      return _d__
              ?(caml_call2(Stdlib[90],ic,compunit[9]),
                compunit[9]
                =
                caml_call1(Stdlib[74],oc),
                caml_call3(Misc[21],ic,oc,compunit[10]))
              :_d__}
    var lib_ccobjs$0=[0,0],lib_ccopts$0=[0,0],lib_dllibs$0=[0,0];
    function add_ccobjs$0(l)
     {var _d6_=1 - Clflags[57][1];
      if(_d6_)
       {if(l[2])Clflags[22][1] = 1;
        lib_ccobjs$0[1] = caml_call2(Stdlib[37],lib_ccobjs$0[1],l[3]);
        lib_ccopts$0[1] = caml_call2(Stdlib[37],lib_ccopts$0[1],l[4]);
        lib_dllibs$0[1] = caml_call2(Stdlib[37],lib_dllibs$0[1],l[5]);
        var _d7_=0}
      else
       var _d7_=_d6_;
      return _d7_}
    function copy_object_file(oc,name)
     {try
       {var file_name=caml_call1(Load_path[6],name)}
      catch(_d5_)
       {_d5_ = caml_wrap_exception(_d5_);
        if(_d5_ === Stdlib[8])throw [0,Error$1,[0,name]];
        throw _d5_}
      var ic=caml_call1(Stdlib[80],file_name);
      try
       {var
         buffer=
          caml_call2(Stdlib[86],ic,caml_ml_string_length(Config[23]));
        if(caml_string_equal(buffer,Config[23]))
         {var compunit_pos=caml_call1(Stdlib[88],ic);
          caml_call2(Stdlib[90],ic,compunit_pos);
          var compunit=caml_call1(Stdlib[89],ic);
          check_consistency(file_name,compunit);
          copy_compunit(ic,oc,compunit);
          caml_call1(Stdlib[93],ic);
          var _dY_=[0,compunit,0]}
        else
         {if(! caml_string_equal(buffer,Config[24]))
           throw [0,Error$1,[1,file_name]];
          var toc_pos=caml_call1(Stdlib[88],ic);
          caml_call2(Stdlib[90],ic,toc_pos);
          var
           toc=caml_call1(Stdlib[89],ic),
           _dZ_=toc[1],
           _d0_=function(_d4_){return check_consistency(file_name,_d4_)};
          caml_call2(Stdlib_list[15],_d0_,_dZ_);
          add_ccobjs$0(toc);
          var
           _d1_=toc[1],
           _d2_=function(_d3_){return copy_compunit(ic,oc,_d3_)};
          caml_call2(Stdlib_list[15],_d2_,_d1_);
          caml_call1(Stdlib[93],ic);
          var _dY_=toc[1]}
        return _dY_}
      catch(x)
       {x = caml_wrap_exception(x);
        if(x === Stdlib[12])
         {caml_call1(Stdlib[93],ic);throw [0,Error$1,[1,file_name]]}
        caml_call1(Stdlib[93],ic);
        throw x}}
    function create_archive(file_list,lib_name)
     {var outchan=caml_call1(Stdlib[61],lib_name);
      function _dP_(param)
       {caml_call2(Stdlib[66],outchan,Config[24]);
        var ofs_pos_toc=caml_call1(Stdlib[74],outchan);
        caml_call2(Stdlib[71],outchan,0);
        function _dS_(_dX_){return copy_object_file(outchan,_dX_)}
        var
         _dT_=caml_call2(Stdlib_list[17],_dS_,file_list),
         units=caml_call1(Stdlib_list[14],_dT_),
         _dU_=caml_call2(Stdlib[37],Clflags[10][1],lib_dllibs$0[1]),
         _dV_=caml_call2(Stdlib[37],Clflags[28][1],lib_ccopts$0[1]),
         _dW_=caml_call2(Stdlib[37],Clflags[9][1],lib_ccobjs$0[1]),
         toc=[0,units,Clflags[22][1],_dW_,_dV_,_dU_],
         pos_toc=caml_call1(Stdlib[74],outchan);
        marshal_to_channel_with_possib
         (lib_name,cst_bytecode_library,outchan,toc);
        caml_call2(Stdlib[73],outchan,ofs_pos_toc);
        return caml_call2(Stdlib[71],outchan,pos_toc)}
      var
       _dQ_=[0,function(param){return caml_call1(Misc[16],lib_name)}],
       _dR_=[0,function(param){return caml_call1(Stdlib[76],outchan)}];
      return caml_call3(Misc[4],_dR_,_dQ_,_dP_)}
    function report_error$1(ppf,param)
     {if(0 === param[0])
       {var name=param[1];return caml_call3(Stdlib_format[125],ppf,_ch_,name)}
      var name$0=param[1];
      return caml_call4(Stdlib_format[125],ppf,_ci_,Location[21],name$0)}
    function _cj_(param)
     {if(param[1] === Error$1)
       {var err=param[2];
        return [0,caml_call2(Location[48],report_error$1,err)]}
      return 0}
    caml_call1(Location[49],_cj_);
    function reset$2(param)
     {lib_ccobjs$0[1] = 0;lib_ccopts$0[1] = 0;lib_dllibs$0[1] = 0;return 0}
    var Bytelibrarian=[0,create_archive,Error$1,report_error$1,reset$2];
    caml_register_global(355,Bytelibrarian,"Bytelibrarian");
    var
     Error$2=[248,cst_Bytepackager_Error,caml_fresh_oo_id(0)],
     relocs=[0,0],
     events$0=[0,0],
     debug_dirs$0=[0,Misc[12][4][39][1]],
     primitives=[0,0],
     force_link=[0,0];
    function rename_relocation(packagename,objfile,mapping,defined,base,param)
     {var ofs=param[2],rel=param[1];
      switch(rel[0])
       {case 1:
         var id=rel[1];
         try
          {var id$0=caml_call2(Stdlib_list[43],id,mapping);
           if(! caml_call2(Stdlib_list[34],id,defined))
            throw [0,Error$2,[0,objfile,id]];
           var _dH_=[1,id$0],_dG_=_dH_}
         catch(_dO_)
          {_dO_ = caml_wrap_exception(_dO_);
           if(_dO_ !== Stdlib[8])throw _dO_;
           var name=caml_call1(Ident[15],id);
           if(caml_call2(Misc[12][4][22],name,46))
            var
             _dD_=caml_call2(Stdlib[28],cst$12,name),
             _dE_=caml_call2(Stdlib[28],packagename,_dD_),
             _dF_=[1,caml_call1(Ident[12],_dE_)];
           else
            var _dF_=rel;
           var _dG_=_dF_}
         var rel$0=_dG_;
         break;
        case 2:
         var id$1=rel[1];
         try
          {var id$2=caml_call2(Stdlib_list[43],id$1,mapping);
           if(caml_call2(Stdlib_list[34],id$1,defined))
            throw [0,Error$2,[1,objfile,id$1]];
           var _dM_=[2,id$2],_dL_=_dM_}
         catch(_dN_)
          {_dN_ = caml_wrap_exception(_dN_);
           if(_dN_ !== Stdlib[8])throw _dN_;
           var name$0=caml_call1(Ident[15],id$1);
           if(caml_call2(Misc[12][4][22],name$0,46))
            var
             _dI_=caml_call2(Stdlib[28],cst$13,name$0),
             _dJ_=caml_call2(Stdlib[28],packagename,_dI_),
             _dK_=[2,caml_call1(Ident[12],_dJ_)];
           else
            var _dK_=rel;
           var _dL_=_dK_}
         var rel$0=_dL_;
         break;
        default:var rel$0=rel}
      relocs[1] = [0,[0,rel$0,base + ofs | 0],relocs[1]];
      return 0}
    function read_member_info(file)
     {var
       _dA_=caml_call1(Misc[32],file),
       _dB_=caml_call1(Stdlib_filename[13],_dA_),
       name=caml_call1(Misc[12][4][31],_dB_);
      if(caml_call2(Stdlib_filename[7],file,cst_cmi))
       var kind=0;
      else
       {var ic=caml_call1(Stdlib[80],file);
        try
         {var
           buffer=
            caml_call2(Stdlib[86],ic,caml_ml_string_length(Config[23]));
          if(caml_string_notequal(buffer,Config[23]))
           throw [0,Error$2,[2,file]];
          var compunit_pos=caml_call1(Stdlib[88],ic);
          caml_call2(Stdlib[90],ic,compunit_pos);
          var compunit=caml_call1(Stdlib[89],ic);
          if(caml_string_notequal(compunit[1],name))
           throw [0,Error$2,[3,name,file,compunit[1]]];
          caml_call1(Stdlib[93],ic);
          var _dC_=[0,compunit]}
        catch(x){x = caml_wrap_exception(x);caml_call1(Stdlib[93],ic);throw x}
        var kind=_dC_}
      return [0,file,name,kind]}
    function rename_append_bytecode
     (packagename,oc,mapping,defined,ofs,prefix,subst,objfile,compunit)
     {var ic=caml_call1(Stdlib[80],objfile);
      try
       {check_consistency(objfile,compunit);
        var
         _de_=compunit[4],
         _df_=
          function(_dz_)
           {return rename_relocation
                    (packagename,objfile,mapping,defined,ofs,_dz_)};
        caml_call2(Stdlib_list[15],_df_,_de_);
        primitives[1] = caml_call2(Stdlib[37],compunit[7],primitives[1]);
        if(compunit[8])force_link[1] = 1;
        caml_call2(Stdlib[90],ic,compunit[2]);
        caml_call3(Misc[21],ic,oc,compunit[3]);
        var _dg_=Clflags[17][1],_dh_=_dg_?0 < compunit[9]?1:0:_dg_;
        if(_dh_)
         {caml_call2(Stdlib[90],ic,compunit[9]);
          var
           _di_=caml_call1(Stdlib[89],ic),
           _dj_=
            function(ev$0)
             {var
               _do_=ev$0[11],
               _dp_=ev$0[10],
               _dq_=ev$0[9],
               _dr_=caml_call2(Subst[25],ev$0[8],subst),
               _ds_=ev$0[7],
               _dt_=ev$0[6],
               _du_=ev$0[5],
               _dv_=ev$0[4],
               _dw_=ev$0[3],
               _dx_=caml_call2(Stdlib[28],cst$14,ev$0[2]),
               _dy_=caml_call2(Stdlib[28],prefix,_dx_),
               ev=
                [0,
                 ofs + ev$0[1] | 0,
                 _dy_,
                 _dw_,
                 _dv_,
                 _du_,
                 _dt_,
                 _ds_,
                 _dr_,
                 _dq_,
                 _dp_,
                 _do_];
              events$0[1] = [0,ev,events$0[1]];
              return 0};
          caml_call2(Stdlib_list[15],_dj_,_di_);
          var
           _dk_=caml_call1(Stdlib[89],ic),
           _dl_=debug_dirs$0[1],
           _dm_=function(s,e){return caml_call2(Misc[12][4][39][4],e,s)};
          debug_dirs$0[1] = caml_call3(Stdlib_list[23],_dm_,_dl_,_dk_)}
        caml_call1(Stdlib[93],ic);
        var _dn_=compunit[3];
        return _dn_}
      catch(x){x = caml_wrap_exception(x);caml_call1(Stdlib[93],ic);throw x}}
    function rename_append_bytecode_list
     (packagename,oc,mapping,defined,ofs,prefix,subst,param)
     {var defined$0=defined,ofs$0=ofs,subst$0=subst,param$0=param;
      for(;;)
       {if(param$0)
         {var rem=param$0[2],m=param$0[1],_dc_=m[3];
          if(_dc_)
           {var
             compunit=_dc_[1],
             size=
              rename_append_bytecode
               (packagename,
                oc,
                mapping,
                defined$0,
                ofs$0,
                prefix,
                subst$0,
                m[1],
                compunit),
             id=caml_call1(Ident[12],m[2]),
             root=[0,caml_call1(Ident[12],prefix)],
             _dd_=[1,root,caml_call1(Ident[15],id)],
             subst$1=caml_call3(Subst[5],id,_dd_,subst$0),
             ofs$1=ofs$0 + size | 0,
             defined$1=[0,id,defined$0],
             defined$0=defined$1,
             ofs$0=ofs$1,
             subst$0=subst$1,
             param$0=rem;
            continue}
          var param$0=rem;
          continue}
        return ofs$0}}
    function build_global_target
     (ppf_dump,oc,target_name,members,mapping,pos,coercion)
     {function _c9_(m,param){var id2=param[2];return m[3]?[0,id2]:0}
      var
       components=caml_call3(Stdlib_list[26],_c9_,members,mapping),
       _c__=caml_call1(Ident[12],target_name),
       lam=caml_call3(Translmod[6],components,_c__,coercion),
       lam$0=caml_call1(Simplif[1],lam);
      if(Clflags[70][1])
       caml_call4(Stdlib_format[125],ppf_dump,_ck_,Printlambda[4],lam$0);
      var
       instrs=compile_implementation(target_name,lam$0),
       rel=to_packed_file(oc,instrs),
       _c$_=relocs[1];
      function _da_(param)
       {var ofs=param[2],r=param[1];return [0,r,pos + ofs | 0]}
      var _db_=caml_call2(Stdlib_list[17],_da_,rel);
      relocs[1] = caml_call2(Stdlib[37],_db_,_c$_);
      return 0}
    function package_object_files
     (ppf_dump,files,targetfile,targetname,coercion)
     {var members=caml_call2(Misc[6],read_member_info,files),_cP_=Ident[6][1];
      function _cQ_(compunit,required_globals)
       {var _c8_=compunit[3];
        if(_c8_)
         {var
           match=_c8_[1],
           cu_required_globals=match[6],
           cu_reloc=match[4],
           remove_required=
            function(param,required_globals)
             {var rel=param[1];
              if(2 === rel[0])
               {var id=rel[1];
                return caml_call2(Ident[6][6],id,required_globals)}
              return required_globals},
           required_globals$0=
            caml_call3
             (Stdlib_list[24],remove_required,cu_reloc,required_globals);
          return caml_call3
                  (Stdlib_list[24],
                   Ident[6][4],
                   cu_required_globals,
                   required_globals$0)}
        return required_globals}
      var required_globals=caml_call3(Stdlib_list[24],_cQ_,members,_cP_);
      function _cR_(m){return m[2]}
      var unit_names=caml_call2(Stdlib_list[17],_cR_,members);
      function _cS_(name)
       {var
         _c5_=caml_call2(Stdlib[28],cst$15,name),
         _c6_=caml_call2(Stdlib[28],targetname,_c5_),
         _c7_=caml_call1(Ident[12],_c6_);
        return [0,caml_call1(Ident[12],name),_c7_]}
      var
       mapping=caml_call2(Stdlib_list[17],_cS_,unit_names),
       oc=caml_call1(Stdlib[61],targetfile);
      try
       {caml_call2(Stdlib[66],oc,Config[23]);
        var pos_depl=caml_call1(Stdlib[74],oc);
        caml_call2(Stdlib[71],oc,0);
        var
         pos_code=caml_call1(Stdlib[74],oc),
         ofs=
          rename_append_bytecode_list
           (targetname,oc,mapping,0,0,targetname,Subst[1],members);
        build_global_target
         (ppf_dump,oc,targetname,members,mapping,ofs,coercion);
        var
         pos_debug=caml_call1(Stdlib[74],oc),
         _cT_=Clflags[17][1],
         _cU_=_cT_?0 !== events$0[1]?1:0:_cT_;
        if(_cU_)
         {var _cV_=caml_call1(Stdlib_list[9],events$0[1]);
          caml_call2(Stdlib[72],oc,_cV_);
          var _cW_=caml_call1(Misc[12][4][39][23],debug_dirs$0[1]);
          caml_call2(Stdlib[72],oc,_cW_)}
        var
         pos_final=caml_call1(Stdlib[74],oc),
         _cX_=extract_crc_interfaces(0),
         _cY_=
          function(param)
           {var name=param[1];
            return 1 - caml_call2(Stdlib_list[34],name,unit_names)},
         imports=caml_call2(Stdlib_list[39],_cY_,_cX_),
         _cZ_=pos_final - pos_debug | 0,
         pos_debug$0=pos_debug < pos_final?pos_debug:0,
         _c0_=force_link[1],
         _c1_=primitives[1],
         _c2_=caml_call1(Ident[6][22],required_globals),
         _c3_=[0,[0,targetname,[0,caml_call1(Env[108],targetname)]],imports],
         compunit=
          [0,
           targetname,
           pos_code,
           pos_debug - pos_code | 0,
           caml_call1(Stdlib_list[9],relocs[1]),
           _c3_,
           _c2_,
           _c1_,
           _c0_,
           pos_debug$0,
           _cZ_];
        marshal_to_channel_with_possib
         (targetfile,cst_bytecode_unit$0,oc,compunit);
        caml_call2(Stdlib[73],oc,pos_depl);
        caml_call2(Stdlib[71],oc,pos_final);
        var _c4_=caml_call1(Stdlib[76],oc);
        return _c4_}
      catch(x){x = caml_wrap_exception(x);caml_call1(Stdlib[76],oc);throw x}}
    function package_files(ppf_dump,initial_env,files,targetfile)
     {function _cJ_(f)
       {try
         {var _cN_=caml_call1(Load_path[6],f);return _cN_}
        catch(_cO_)
         {_cO_ = caml_wrap_exception(_cO_);
          if(_cO_ === Stdlib[8])throw [0,Error$2,[4,f]];
          throw _cO_}}
      var
       files$0=caml_call2(Stdlib_list[17],_cJ_,files),
       prefix=caml_call1(Misc[32],targetfile),
       targetcmi=caml_call2(Stdlib[28],prefix,cst_cmi$0),
       _cK_=caml_call1(Stdlib_filename[13],prefix),
       targetname=caml_call1(Misc[12][4][31],_cK_);
      function _cL_(param)
       {var
         coercion=
          caml_call4(Typemod[12],initial_env,files$0,targetcmi,targetname);
        return package_object_files
                (ppf_dump,files$0,targetfile,targetname,coercion)}
      var _cM_=[0,function(param){return caml_call1(Misc[16],targetfile)}];
      return caml_call3(Misc[4],0,_cM_,_cL_)}
    function report_error$2(ppf,param)
     {switch(param[0])
       {case 0:
         var
          ident=param[2],
          file=param[1],
          _cG_=Location[21],
          _cH_=caml_call1(Ident[15],ident);
         return caml_call5(Stdlib_format[125],ppf,_cl_,_cH_,_cG_,file);
        case 1:
         var
          ident$0=param[2],
          file$0=param[1],
          _cI_=caml_call1(Ident[15],ident$0);
         return caml_call5
                 (Stdlib_format[125],ppf,_cm_,Location[21],file$0,_cI_);
        case 2:
         var file$1=param[1];
         return caml_call4(Stdlib_format[125],ppf,_cn_,Location[21],file$1);
        case 3:
         var id=param[3],file$2=param[2],name=param[1];
         return caml_call6
                 (Stdlib_format[125],ppf,_co_,Location[21],file$2,name,id);
        default:
         var file$3=param[1];
         return caml_call3(Stdlib_format[125],ppf,_cp_,file$3)}}
    function _cq_(param)
     {if(param[1] === Error$2)
       {var err=param[2];
        return [0,caml_call2(Location[48],report_error$2,err)]}
      return 0}
    caml_call1(Location[49],_cq_);
    function reset$3(param)
     {relocs[1] = 0;
      events$0[1] = 0;
      primitives[1] = 0;
      force_link[1] = 0;
      return 0}
    var Bytepackager=[0,package_files,Error$2,report_error$2,reset$3];
    caml_register_global(358,Bytepackager,"Bytepackager");
    var report_error$3=Location[54],Errors=[0,report_error$3];
    caml_register_global(359,Errors,"Errors");
    var with_info=caml_call2(Compile_common[1],0,tool_name);
    function interface$0(source_file,output_prefix)
     {return caml_call4
              (with_info,
               source_file,
               output_prefix,
               cst_cmi$1,
               function(info){return caml_call1(Compile_common[5],info)})}
    function to_bytecode(i,param)
     {var
       coercion=param[2],
       typedtree=param[1],
       _cz_=caml_call1(Translmod[1],i[2]),
       _cA_=
        caml_call2
         (caml_call2(Profile[3],0,Profile[8]),_cz_,[0,typedtree,coercion]);
      function _cB_(param)
       {var
         lambda=param[4],
         required_globals=param[3],
         _cC_=caml_call4(Misc[59],i[5],Clflags[69],Printlambda[4],lambda),
         _cD_=caml_call1(Simplif[1],_cC_),
         _cE_=caml_call4(Misc[59],i[5],Clflags[70],Printlambda[4],_cD_),
         _cF_=compile_implementation(i[2],_cE_),
         bytecode=caml_call4(Misc[59],i[5],Clflags[76],instrlist,_cF_);
        return [0,bytecode,required_globals]}
      return caml_call2(caml_call2(Profile[3],_cr_,Profile[7]),_cB_,_cA_)}
    function emit_bytecode(i,param)
     {var
       required_globals=param[2],
       bytecode=param[1],
       cmofile=caml_call1(Compile_common[9],i),
       oc=caml_call1(Stdlib[61],cmofile);
      function _ct_(param)
       {var _cw_=i[2];
        function _cx_(_cy_)
         {return to_file(oc,_cw_,cmofile,required_globals,_cy_)}
        return caml_call2
                (caml_call2(Profile[3],_cs_,Profile[7]),_cx_,bytecode)}
      var
       _cu_=[0,function(param){return caml_call1(Misc[16],cmofile)}],
       _cv_=[0,function(param){return caml_call1(Stdlib[76],oc)}];
      return caml_call3(Misc[4],_cv_,_cu_,_ct_)}
    function implementation(source_file,output_prefix)
     {function backend(info,typed)
       {var bytecode=to_bytecode(info,typed);
        return emit_bytecode(info,bytecode)}
      return caml_call4
              (with_info,
               source_file,
               output_prefix,
               cst_cmo,
               function(info)
                {return caml_call2(Compile_common[8],info,backend)})}
    var Compile=[0,interface$0,implementation,to_bytecode,emit_bytecode];
    caml_register_global(362,Compile,"Compile");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJvY2FtbGJ5dGVjb21wLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXNDb250ZW50IjpbXX0=
