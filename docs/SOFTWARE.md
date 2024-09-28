# Duckiebot Software

Here a collection (public) of relevant ("low level") code for the Duckiebot:
- [dt-duckiebot-interface](https://github.com/duckietown/dt-duckiebot-interface/): ("drivers") low level communication with the robot components like motor, led and more.
- [fw-device-hut](https://github.com/duckietown/fw-device-hut): "Firmware for the Duckietown Hat". Harley note: I'm not sure if this is the actual/latest firmware on the hat. The hat is mainly based on the following repositories:
    - [neopixel_i2c](https://github.com/usedbytes/neopixel_i2c/tree/master): AVR-based i2c-slave Neopixel driver.
    - [usi_i2c_slave](https://github.com/usedbytes/usi_i2c_slave/tree/8dfefe6d1de6ad5fe7d19547fb8705782f18c031): An AVR USI i2c slave library.
