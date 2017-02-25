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
	public List<String> getHistory(){
		List<String> history = new ArrayList<String>();		

		history.add("Oracle America");
		history.add("Sunera Technologies");
		history.add("Capgemini India");
		history.add("Oracle India");
		history.add("Caritor India");

		return history;
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
	
}