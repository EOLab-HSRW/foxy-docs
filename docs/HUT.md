# Reversing the HUT

Availables interfaces:
- x2 I2C from [fw-device-hut/i2c/i2c_machine.c](https://github.com/duckietown/fw-device-hut/blob/4b912997c5042997e9f35da4b96676bfad0168e1/i2c/i2c_machine.c#L64)
    - `0x40` maybe for the PCA9685 PWM channel servo driver
    - `0x60` maybe for the internal microcontroller ?? [hat.py](https://github.com/duckietown/dt-duckiebot-interface/blob/974408f216b6084c8837ab5713e797aa6ebfa455/packages/hat_driver/include/hat_driver/hat.py#L9-L21)
