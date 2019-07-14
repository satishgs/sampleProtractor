Feature: To launch MUFG landing page

  @mufg
  Scenario: MUFG Landing page
    Given I open the mufg home page
    When I navigate to the login page
    Then I enter Username
    Then I enter Password
    Then I click Log in
    Then I am on "home" page
