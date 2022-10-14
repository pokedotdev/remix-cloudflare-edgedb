CREATE MIGRATION m1wbuqhtale4q3z7przshg2c5dodnkl6kta4duz6suxzcufesypyiq
    ONTO initial
{
  CREATE TYPE default::Note {
      CREATE REQUIRED PROPERTY body -> std::str;
  };
};
