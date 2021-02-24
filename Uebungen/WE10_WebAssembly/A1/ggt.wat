(module
    (export "ggt" (func $ggt))
    (func $ggt (param $x i32) (param $y i32) (result i32)
    (local $temp i32)
    get_local $x
    i32.eqz
    if
       i32.const $y
       return
    get_local $y
    i32.eqz
    if
       i32.const $x
       return
    loop $loop
        get_local $temp
        get_local $x
        tee_local $y
        i32.rem_s
        set_local $


    )
)