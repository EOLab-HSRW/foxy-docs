# User Setup

This guide installs the Foxy Robot simulation environment on your computer.

The installer detects your Ubuntu version, installs the appropriate ROS 2 distribution and simulation dependencies, creates a Foxy workspace, and builds the required packages.

## Supported systems

Select the instructions that match the Ubuntu version installed on your computer.

| Operating system | ROS 2 distribution | Architecture       | Simulator       |
| ---------------- | ------------------ | ------------------ | --------------- |
| Ubuntu 22.04 LTS | ROS 2 Humble       | `amd64` or `arm64` | Gazebo Harmonic |
| Ubuntu 24.04 LTS | ROS 2 Jazzy        | `amd64` or `arm64` | Gazebo Harmonic |

Other Ubuntu releases, Linux distributions, and ROS 2 combinations are not supported by the automatic installer.

## Installer Script

The following installer script is provided for convenience, but it downloads and immediately executes the installer.

The installer does not perform destructive operations. For actions that require elevated privileges or make significant system changes, it prompts you for permission and asks you to verify the operation before continuing.

If you prefer to inspect the script before running it, that is completely understandable. Go to [Recommended Installation](#recommended-installation) for step-by-step instructions.

> [!CAUTION]
> **Do not run installation commands from the internet without inspecting them first.**
>
> A command that downloads a script and sends it directly to a shell allows that script to execute commands on your computer immediately. The script may install software, modify system configuration, access files, or run commands with administrator privileges.
>
> Never copy and paste commands from a website unless you trust the source, have inspected the downloaded code, and understand what it does.

It may seem contradictory to warn against running scripts from the internet and then provide a one-line command that does exactly that. The command is included for convenience, not to discourage inspection. The installer is fully open and available for review, so you can inspect exactly what it does before running it. That is one of the advantages of transparency and open-source software. 😎

If you are ready, run the following command:

```bash
curl -fsSL https://raw.githubusercontent.com/EOLab-HSRW/foxy-robot/refs/heads/main/install-sim.sh | bash
```

## Recommended installation

Downloading, inspecting, and then running the installer is safer than piping it directly into Bash.

### 1. Download the installer

```bash
curl -fsSL \
  https://raw.githubusercontent.com/EOLab-HSRW/foxy-robot/refs/heads/main/install-sim.sh \
  -o install-sim.sh
```

### 2. Inspect the installer

Open the script in a terminal:

```bash
less install-sim.sh
```

Press <kbd>q</kbd> to close `less`.

You can also open it in a text editor:

```bash
nano install-sim.sh
```

Pay particular attention to commands that:

* Use `sudo`
* Install or remove packages
* Add software repositories
* Download additional files
* Modify shell configuration
* Delete or overwrite files
* Start or enable system services

The complete installer can also be reviewed in the Foxy Robot repository:

```text
https://github.com/EOLab-HSRW/foxy-robot/blob/main/install-sim.sh
```

> [!IMPORTANT]
> Run the script only after you are satisfied that it comes from the expected repository and that you understand the operations it performs.

### 3. Run the installer

```bash
bash install-sim.sh
```

The installer may request your password when it needs administrator privileges.
