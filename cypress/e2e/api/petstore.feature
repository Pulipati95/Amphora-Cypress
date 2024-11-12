Feature: CRUD operations for Pet API

  Scenario: Create, read, update, and delete a pet
    Given I create a new pet with name "Jimmy" and status "available"
    When I update the pet status to "sold"
    Then I should be able to read the pet with updated status
    And I should be able to delete the pet
