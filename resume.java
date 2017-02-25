package com.vtkrishn;

import seek.fulltime.SoftwareEngineer;

public class vtkrishn{
	
	public static final String name = "Vinod Krishnan";
	
	//Constructor
	public vtkrishn(){

		//Skills developed over the period
		List<String> languages = new ArrayList<String>();
		List<String> frameworks = new ArrayList<String>();
		List<String> environments = new ArrayList<String>();
		List<String> databases = new ArrayList<String>();
		List<String> concepts = new ArrayList<String>();
		List<String> selfLearnt = new ArrayList<String>();
		//languages known to code
		languages.add("Java");
		languages.add("JavaScript");
		languages.add("C++");
		//framework used and explored
		frameworks.add("J2EE");
		frameworks.add("REST Web Services");
		frameworks.add("Hiberate");
		frameworks.add("Angular");
		//platform in which worked on
		environments.add("Linux");
		//knows to query and retrieve data
		databases.add("SQL");
		databases.add("PL/SQL");
		//solid foundation on these
		concepts.add("OOPS");
		concepts.add("Design Patterns");
		concepts.add("MVC");
		concepts.add("Concurrency");
		//learnt in free time to explore
		selfLearnt.add("Python");
		selfLearnt.add("Perl");

	}

	/*
	*	Enployment History
	*/
	public Map<String,StringBuffer> getHistory(boolean onlyRecent){
		Map<String,StringBuffer> history = new HashMap<String,StringBuffer>();
		StringBuffer description = new StringBuffer();		
		String company;

		if(onlyRecent){
			company = "Oracle America";
			description.append("Edit Splits – Time Split generation for different dimensions [Account, Geography, Products]");
			description.append("•	Conception and development of new algorithm to split Business Objectives for CRM Sales Application");
			description.append("•	Design responsive UI for seamless user interaction");
			description.append("Advanced Search - Support free form searching for Sales Objects");
			description.append("•	Develop efficient criteria tracking involving string and pattern matching");
			description.append("•	Involved in SQL query tuning exercise along with UI and backend logic in Java");
			description.append("•	Improved response time by 20 sec by identifying performance alternatives");
			description.append("Translation API – External API support to identify object assignment");
			description.append("•	Redesigned existing logic by reducing the iteration using efficient data structures");
			description.append("•	Improved performance by 10%");
			
			history.put(company,description);
		}
		else{
			history = getAllJobHistory();
		}
		
		return history;
		}
	}
	
	/*
	* Social Presence
	*/
	public List<String> getSocial(){
		List<String>  = new ArrayList<String>();		

		social.add("http://vtkrishn.github.io/");
		social.add("http://linkedin.come/in/vtkrishn");
		
		return social;
	}
	
	/*
	* Sponsorship
	*/
	public boolean isSponsorShipNeeded(){
		return true;
	}

}