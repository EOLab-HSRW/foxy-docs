# Reversing the HUT

Components:
- IMU [MPU-6050](https://invensense.tdk.com/wp-content/uploads/2015/02/MPU-6000-Datasheet1.pdf)
- ToF [VL53L0X](https://www.st.com/resource/en/datasheet/vl53l0x.pdf)
- 8-Channel I2C Switch [TCA9548A](https://www.ti.com/lit/ds/symlink/tca9548a.pdf)
- Display [SSD1306](https://cdn-shop.adafruit.com/datasheets/SSD1306.pdf)
- LEDs [PL9823](https://cdn.instructables.com/ORIG/FW0/YN1X/IHDUL683/FW0YN1XIHDUL683.pdf)
- Motor driver [TB6612FNG](https://www.sparkfun.com/datasheets/Robotics/TB6612FNG.pdf)
- "HUT" microcontroller [ATtiny861A](https://ww1.microchip.com/downloads/en/DeviceDoc/doc8197.pdf)
- EEPROM [CAT24C32](https://www.onsemi.com/pdf/datasheet/cat24c32-d.pdf) address 0x50 on I2C.

![Duckiebot pinout](./duckiebot-pinout.svg)

