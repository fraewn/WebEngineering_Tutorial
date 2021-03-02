(module
 (table 0 anyfunc)
 (memory $0 1)
 (export "memory" (memory $0))
 (export "GreatestCommonDivisor" (func $GreatestCommonDivisor))
 (func $GreatestCommonDivisor (; 0 ;) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (block $label$0
   (block $label$1
    (block $label$2
     (br_if $label$2
      (i32.eqz
       (get_local $0)
      )
     )
     (br_if $label$1
      (i32.eqz
       (get_local $1)
      )
     )
     (loop $label$3
      (set_local $1
       (i32.rem_s
        (get_local $0)
        (tee_local $2
         (get_local $1)
        )
       )
      )
      (set_local $0
       (get_local $2)
      )
      (br_if $label$3
       (get_local $1)
      )
      (br $label$0)
     )
    )
    (set_local $2
     (get_local $1)
    )
    (br $label$0)
   )
   (set_local $2
    (get_local $0)
   )
  )
  (i32.xor
   (i32.add
    (get_local $2)
    (tee_local $1
     (i32.shr_s
      (get_local $2)
      (i32.const 31)
     )
    )
   )
   (get_local $1)
  )
 )
)
