# System Overview

## Camera

| topic                                        | msg                                                                                                      | hw  | gz  |
|----------------------------------------------|----------------------------------------------------------------------------------------------------------|:---:|:---:|
| `/[namespace]/camera_front/camera_info`      | [`sensor_msgs/msg/CameraInfo`](https://docs.ros2.org/foxy/api/sensor_msgs/msg/CameraInfo.html)           | ✅ | ✅ |
| `/[namespace]/camera_front/image/compressed` | [`sensor_msgs/msg/CompressedImage`](https://docs.ros2.org/foxy/api/sensor_msgs/msg/CompressedImage.html) | ✅ | ✅ |

## Sensors

| topic                                                  | msg                                                                                                | hw  | gz  |
|--------------------------------------------------------|----------------------------------------------------------------------------------------------------|:---:|:---:|
| `/[namespace]/battery_state_broadcaster/battery_state` | [`sensor_msgs/msg/BatteryState`](https://docs.ros2.org/foxy/api/sensor_msgs/msg/BatteryState.html) | ✅ | ❌  |
| `/[namespace]/button_state`                            | [`std_msgs/msg/Bool`](https://docs.ros2.org/foxy/api/std_msgs/msg/Bool.html)                       | ✅ | ❌  |
| `/[namespace]/imu_sensor_broadcaster/imu`              | [`sensor_msgs/msg/Imu`](https://docs.ros2.org/foxy/api/sensor_msgs/msg/Imu.html)                   | ✅ | ✅ |
| `/[namespace]/imu_sensor_broadcaster/imu/filtered`     | [`sensor_msgs/msg/Imu`](https://docs.ros2.org/foxy/api/sensor_msgs/msg/Imu.html)                   | ✅ | ✅ |
| `/[namespace]/tof/front/range`                         | [`sensor_msgs/msg/LaserScan`](https://docs.ros2.org/foxy/api/sensor_msgs/msg/LaserScan.html)       | ✅ | ✅ |

## Control and Movement

| topic                                             | msg                                                                                      | hw  | gz  |
|---------------------------------------------------|------------------------------------------------------------------------------------------|:---:|:---:|
| `/[namespace]/diff_drive_base_controller/cmd_vel` | [`geometry_msgs/msg/Twist`](https://docs.ros2.org/foxy/api/geometry_msgs/msg/Twist.html) | ✅ | ✅ |
| `/[namespace]/diff_drive_base_controller/odom`    | [`nav_msgs/msg/Odometry`](https://docs.ros2.org/foxy/api/nav_msgs/msg/Odometry.html)     | ✅ | ✅ |
| `/[namespace]/odometry/filtered`                  | [`nav_msgs/msg/Odometry`](https://docs.ros2.org/foxy/api/nav_msgs/msg/Odometry.html)     | ✅ | ✅ |

| topic                               | msg                                                                                                            | hw  | gz  |
|-------------------------------------|----------------------------------------------------------------------------------------------------------------|:---:|:---:|
| `/[namespace]/dynamic_joint_states` | [`control_msgs/msg/DynamicJointState`](https://docs.ros2.org/foxy/api/control_msgs/msg/DynamicJointState.html) | ✅ | ✅ |
| `/[namespace]/joint_states`         | [`sensor_msgs/msg/JointState`](https://docs.ros2.org/foxy/api/sensor_msgs/msg/JointState.html)                 | ✅ | ✅ |

## LEDs

| topic                       | msg                                                                                     | hw  | gz  |
|-----------------------------|-----------------------------------------------------------------------------------------|:---:|:---:|
| `/[namespace]/led/front_left/get`  | [`std_msgs/msg/ColorRGBA`](https://docs.ros2.org/foxy/api/std_msgs/msg/ColorRGBA.html)* | ✅ | ✅ |
| `/[namespace]/led/front_left/set`  | [`std_msgs/msg/ColorRGBA`](https://docs.ros2.org/foxy/api/std_msgs/msg/ColorRGBA.html)* | ✅ | ✅ |
| `/[namespace]/led/front_right/get` | [`std_msgs/msg/ColorRGBA`](https://docs.ros2.org/foxy/api/std_msgs/msg/ColorRGBA.html)* | ✅ | ✅ |
| `/[namespace]/led/front_right/set` | [`std_msgs/msg/ColorRGBA`](https://docs.ros2.org/foxy/api/std_msgs/msg/ColorRGBA.html)* | ✅ | ✅ |
| `/[namespace]/led/rear_left/get`   | [`std_msgs/msg/ColorRGBA`](https://docs.ros2.org/foxy/api/std_msgs/msg/ColorRGBA.html)* | ✅ | ✅ |
| `/[namespace]/led/rear_left/set`   | [`std_msgs/msg/ColorRGBA`](https://docs.ros2.org/foxy/api/std_msgs/msg/ColorRGBA.html)* | ✅ | ✅ |
| `/[namespace]/led/rear_right/get`  | [`std_msgs/msg/ColorRGBA`](https://docs.ros2.org/foxy/api/std_msgs/msg/ColorRGBA.html)* | ✅ | ✅ |
| `/[namespace]/led/rear_right/set`  | [`std_msgs/msg/ColorRGBA`](https://docs.ros2.org/foxy/api/std_msgs/msg/ColorRGBA.html)* | ✅ | ✅ |
| `/[namespace]/led/top/get`         | [`std_msgs/msg/ColorRGBA`](https://docs.ros2.org/foxy/api/std_msgs/msg/ColorRGBA.html)* | ✅ | ✅ |
| `/[namespace]/led/top/set`         | [`std_msgs/msg/ColorRGBA`](https://docs.ros2.org/foxy/api/std_msgs/msg/ColorRGBA.html)* | ✅ | ✅ |

* ColorRGBA contains four float32 fields: r, g, b, and a. The range goes from 0 to 100 for all fields.

| topic                            | msg                                                                                      | hw  | gz  |
|----------------------------------|------------------------------------------------------------------------------------------|:---:|:---:|
| `/[namespace]/robot_description` | [`std_msgs/msg/String`](https://docs.ros2.org/foxy/api/std_msgs/msg/String.html)         | ✅ | ✅ |
| `/clock`                         | [`rosgraph_msgs/msg/Clock`](https://docs.ros2.org/foxy/api/rosgraph_msgs/msg/Clock.html) | ❌  | ✅ |

