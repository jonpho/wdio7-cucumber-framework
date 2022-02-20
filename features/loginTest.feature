Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I navigate to admin page
    When I click on the new campaigns
    When I click on the back campaign link
    Then I click on the logout link
