(module
  (type $type0 (func (param i32 i32) (result i32)))
  (table 0 anyfunc)
  (memory 1)
  (export "memory" memory)
  (export "ggt" $ggt)

  (func $ggt (param i32) (param $y i32) (result i32)
    (local $tmp i32)
    block $label3 block $label1 block $label0
      get_local $x
      i32.eqz
      br_if $label0
      get_local $y
      i32.eqz
      br_if $label1
      loop $label2
        get_local $x
        get_local $y
        tee_local $tmp
        i32.rem_s
        set_local $y
        get_local $tmp
        set_local $x
        get_local $y
        br_if $label2
        br $label3
      end $label2
    end $label0
      get_local $y
      set_local $tmp
      br $label3
    end $label1
      get_local $x
      set_local $tmp
    end $label3
    get_local $tmp
    get_local $tmp
    i32.const 31
    i32.shr_s
    tee_local $y
    i32.add
    get_local $y
    i32.xor
  )
)