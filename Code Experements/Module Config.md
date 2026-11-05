## A slight change to Johns module config example

```java

  //imports
  
  public static final double maxSpeedMetersPerSec = 5.0; // to tune
  public static final double odometryFrequency = 100.0; // Hz
  public static final double trackWidth = Units.inchesToMeters(28);
  public static final double wheelBase = Units.inchesToMeters(28);
  public static final double driveBaseRadius = Math.hypot(trackWidth / 2.0, wheelBase / 2.0);

  public static final Translation2d FRONT_LEFT = new Translation2d(trackWidth / 2.0, wheelBase / 2.0);
  public static final Translation2d FRONT_RIGHT = new Translation2d(trackWidth / 2.0, -wheelBase / 2.0);
  public static final Translation2d BACK_LEFT = new Translation2d(-trackWidth / 2.0, wheelBase / 2.0);
  public static final Translation2d BACK_RIGHT = new Translation2d(-trackWidth / 2.0, -wheelBase / 2.0);

  /** Parameter values for one swerve module. */
  public record ModuleParams(
      Translation2d location,
      int turnCanId,
      int driveCanId,
      int canCoderCanId,
      Rotation2d zeroRotation) {}

  public static final ModuleParams MOD_0 =
      new ModuleParams(
          FRONT_LEFT, // location
          10, // turnCanId
          11, // driveCanId
          12, // canCoderCanId
          new Rotation2d(-0.854)); // zeroRotation
  public static final ModuleParams MOD_1 =
      new ModuleParams(
          new Translation2d(trackWidth / 2.0, -wheelBase / 2.0), // location
          13, // turnCanId
          14, // driveCanId
          15, // canCoderCanId
          new Rotation2d(-2.259)); // zeroRotation
  public static final ModuleParams MOD_2 =
      new ModuleParams(
          new Translation2d(-trackWidth / 2.0, wheelBase / 2.0), // location
          16, // turnCanId
          17, // driveCanId
          18, // canCoderCanId
          new Rotation2d(-1.093)); // zeroRotation
  public static final ModuleParams MOD_3 =
      new ModuleParams(
          new Translation2d(-trackWidth / 2.0, -wheelBase / 2.0), // location
          19, // turnCanId
          20, // driveCanId
          21, // canCoderCanId
          new Rotation2d(2.857)); // zeroRotation

  // List of module parameters in the *required* order:
  // --> FRONT_LEFT, FRONT_RIGHT, BACK_LEFT, BACK_RIGHT
  // - PathPlanner *requires* this order
  // - This order is used everywhere else to ensure consistency between all components
  public static final ModuleParams[] moduleParams = {
    MOD_0, MOD_1, MOD_2, MOD_3
  };

  // REST OF THE CODE

```