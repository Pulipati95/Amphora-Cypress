Feature: Google Search for Amphora CTRM

  Scenario: Search and navigate to Amphora and signup for newsletter
    Given I am on the Google homepage
    When I search for Amphora
    And I click on the "Amphora CTRM" link
    Then I should be on the Amphora website
    When I click newsletter
    Then I am on newsletter page
    Then I should see a confirmation message Thank you for signing up for our newsletter
